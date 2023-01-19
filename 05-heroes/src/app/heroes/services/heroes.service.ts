import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/heroes.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private endpoint: string = 'http://localhost:3000/heroes';

  public constructor(private httpClient: HttpClient) {}

  public getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(this.endpoint);
  }
}
