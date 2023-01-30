import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { delay, map, Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from 'src/app/auth/interfaces/auth.interface';

@Injectable({
  providedIn: 'root',
})
export class UniqueEmailValidatorService implements AsyncValidator {
  public constructor(private httpClient: HttpClient) {}

  public validate(
    control: AbstractControl<string>
  ): Observable<ValidationErrors | null> {
    const endpoit = 'http://localhost:3000/users';
    const params = new HttpParams().set('q', control.value);
    return this.httpClient
      .get<User[]>(endpoit, { params })
      .pipe(map((users) => (users.length === 0 ? null : { unique: true })));
  }
}
