import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private BASE_URL: string = 'https://restcountries.com/v3.1';

  public constructor(private httpClient: HttpClient) {}

  public searchByName(name: string): Observable<Country[]> {
    const endpoint: string = `${this.BASE_URL}/name/${name}`;
    return this.httpClient.get<Country[]>(endpoint);
  }

  public searchByCapital(capital: string): Observable<Country[]> {
    const endpoint: string = `${this.BASE_URL}/capital/${capital}`;
    return this.httpClient.get<Country[]>(endpoint);
  }

  public searchByCode(code: string): Observable<Country> {
    const endpoint: string = `${this.BASE_URL}/alpha/${code}`;
    return this.httpClient
      .get<Country[]>(endpoint)
      .pipe(map((countries) => countries[0]));
  }
}
