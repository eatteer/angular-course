import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Hero[]> {
    const endpoint: string = `${environment.apiUrl}/heroes`;
    return this.httpClient.get<Hero[]>(endpoint);
  }

  public getById(id: string): Observable<Hero> {
    const endpoint: string = `${environment.apiUrl}/heroes/${id}`;
    return this.httpClient.get<Hero>(endpoint);
  }

  public getSuggestions(query: string): Observable<Hero[]> {
    const endpoint: string = `${environment.apiUrl}/heroes`;
    const params: HttpParams = new HttpParams()
      .set('q', query)
      .set('_limit', 6);
    return this.httpClient.get<Hero[]>(endpoint, { params });
  }

  public create(hero: Hero): Observable<Hero> {
    const endpoint: string = `${environment.apiUrl}/heroes`;
    return this.httpClient.post<Hero>(endpoint, hero);
  }

  public update(hero: Hero): Observable<Hero> {
    const endpoint: string = `${environment.apiUrl}/heroes/${hero.id}`;
    return this.httpClient.put<Hero>(endpoint, hero);
  }

  public delete(id: string): Observable<void> {
    const endpoint: string = `${environment.apiUrl}/heroes/${id}`;
    return this.httpClient.delete<void>(endpoint);
  }
}
