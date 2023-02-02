import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { UsersStatistics } from '../interfaces/charts.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  public constructor(private httpClient: HttpClient) {}

  public getUsersStatistics(): Observable<UsersStatistics> {
    const endpoint = `${environment.apiBaseUrl}/data`;
    return this.httpClient.get<UsersStatistics>(endpoint);
  }
}
