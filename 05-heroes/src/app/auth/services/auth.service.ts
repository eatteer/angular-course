import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { tap, Observable } from 'rxjs';
import { User } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user: User | null = null;

  public constructor(private httpClient: HttpClient) {
    this.tryInitAuth();
  }

  public login(): Observable<User> {
    const endpoint: string = `${environment.apiUrl}/users/1`;
    return this.httpClient.get<User>(endpoint).pipe(
      tap((user) => {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  public logout(): void {
    localStorage.removeItem('user');
    this.user = null;
  }

  public isAuthenticated(): boolean {
    return Boolean(this.user);
  }

  private tryInitAuth(): void {
    const userInStorage: string | null = localStorage.getItem('user');
    if (userInStorage) this.user = JSON.parse(userInStorage);
  }
}
