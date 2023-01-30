import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private baseUrl = 'https://restcountries.com/v3.1';
  private params = new HttpParams().set('fields', 'name,cca2,borders');

  private regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  public constructor(private httpClient: HttpClient) {}

  public getRegions(): string[] {
    return this.regions;
  }

  public getCountries(region: string): Observable<Country[]> {
    const endpoint = `${this.baseUrl}/region/${region}`;
    return this.httpClient.get<Country[]>(endpoint, {
      params: this.params,
    });
  }

  public getCountry(code: string): Observable<Country> {
    const endpoint = `${this.baseUrl}/alpha/${code}`;
    return this.httpClient.get<Country>(endpoint, {
      params: this.params,
    });
  }

  // public getCountriesByCode(codes: string[]): Observable<Country[]> {
  //   const countries = codes.map((code) => this.getCountry(code));
  //   return combineLatest(countries);
  // }
}
