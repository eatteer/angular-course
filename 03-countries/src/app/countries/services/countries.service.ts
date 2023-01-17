import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private BASE_URL: string = 'https://restcountries.com/v3.1';

  private fields: string = 'flags,name,population,cca2';
  private params: HttpParams = new HttpParams().set('fields', this.fields);

  public constructor(private httpClient: HttpClient) {}

  public searchByName(name: string): Observable<Country[]> {
    const endpoint: string = `${this.BASE_URL}/name/${name}`;
    return this.httpClient.get<Country[]>(endpoint, { params: this.params });
  }

  public searchByCapital(capital: string): Observable<Country[]> {
    const endpoint: string = `${this.BASE_URL}/capital/${capital}`;
    return this.httpClient.get<Country[]>(endpoint, { params: this.params });
  }

  public searchByCode(code: string): Observable<Country> {
    const endpoint: string = `${this.BASE_URL}/alpha/${code}`;
    return this.httpClient
      .get<Country[]>(endpoint)
      .pipe(map((countries) => countries[0]));
  }

  public searchByRegion(region: string): Observable<Country[]> {
    const endpoint: string = `${this.BASE_URL}/region/${region}`;
    return this.httpClient.get<Country[]>(endpoint, { params: this.params });
  }
}
