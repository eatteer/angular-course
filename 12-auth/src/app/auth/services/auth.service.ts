import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  LoginRequest,
  LoginResponse,
  RegisterResponse,
  RegisterRequest,
  User,
} from '../interfaces/auth.interfaces';
import { map, Observable, tap, catchError, of } from 'rxjs';
import { RenewResponse } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user?: User;

  public constructor(private httpClient: HttpClient) {
    console.log({
      production: environment.production,
      apiBaseUrl: environment.apiBaseUrl,
    });
  }

  public login(credentials: LoginRequest): Observable<LoginResponse> {
    const endpoint = `${environment.apiBaseUrl}/auth/login`;
    return this.httpClient.post<LoginResponse>(endpoint, credentials).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        this.user = response.user;
      })
    );
  }

  public register(credentials: RegisterRequest): Observable<RegisterResponse> {
    const endpoint = `${environment.apiBaseUrl}/auth/register`;
    return this.httpClient.post<RegisterResponse>(endpoint, credentials);
  }

  public logout(): void {
    localStorage.removeItem('accessToken');
  }

  /**
   * Validate and and renew local storage access token agains server
   * @returns Access token validity
   */
  public renewAccessToken(): Observable<boolean> {
    const endpoint = `${environment.apiBaseUrl}/auth/renew`;
    const token = localStorage.getItem('accessToken') || '';
    const headers = new HttpHeaders().set('X-Access-Token', token);
    return this.httpClient.get<RenewResponse>(endpoint, { headers }).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.accessToken);
        this.user = response.user;
      }),
      map((_) => true),
      catchError((_) => of(false))
    );
  }
}
