import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { GifsSearchResponse, Gif } from '../types';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private BASE_URL: string = 'https://api.giphy.com';
  private API_KEY: string = 'McbqhnznpfOO4NTFjPk6mfCmPSI9rGt7';

  private limitResults: number = 10;
  private maxHistoryLength: number = 10;
  public history: string[] = [];
  public latestResults: Gif[] = [];

  public constructor(private httpClient: HttpClient) {
    const localStorageHistory: string | null = localStorage.getItem('history');
    const localStorageLatestResults: string | null =
      localStorage.getItem('latestResult');
    if (localStorageHistory) {
      this.history = JSON.parse(localStorageHistory);
      this.latestResults = JSON.parse(localStorageLatestResults!);
    }
  }

  public search(query: string): Observable<GifsSearchResponse> {
    // Normalize query
    const normalizedQuery = query.trim().toLowerCase();
    this.unshiftHistory(normalizedQuery);
    return this.fetchGifs(normalizedQuery).pipe(
      tap((result) => {
        this.latestResults = result.data;
        localStorage.setItem(
          'latestResult',
          JSON.stringify(this.latestResults)
        );
      })
    );
  }

  private fetchGifs(query: string): Observable<GifsSearchResponse> {
    const endpoint: string = `${this.BASE_URL}/v1/gifs/search`;
    const params: HttpParams = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('q', query)
      .set('limit', this.limitResults);
    return this.httpClient.get<GifsSearchResponse>(endpoint, { params });
  }

  /**
   * Insert an item at the start of the history.
   *
   * Important: History has a max lenght of 5. So, when the history
   * reachs the max length, the last item is removed.
   * @param item Item to insert
   */
  private unshiftHistory(item: string): void {
    // Is the item already in the history.
    const isInArray = this.history.includes(item);
    if (isInArray) return;

    // Insert item at the start of the array and keep the history max length.
    this.history.unshift(item);
    this.history = this.history.slice(0, this.maxHistoryLength);
    localStorage.setItem('history', JSON.stringify(this.history));
  }
}
