import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { LoginRequest } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  public form = this.fb.group({
    email: ['eatteer@gmail.com', [Validators.required, Validators.email]],
    password: ['lovewony', [Validators.required, Validators.minLength(6)]],
  });

  public constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public submit(): void {
    const { email, password } = this.form.getRawValue();
    const credentials: LoginRequest = { email, password };
    this.authService.login(credentials).subscribe({
      next: (_) => {
        this.router.navigate(['/dashboard']);
      },
      error: (httpError: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          text: httpError.error['message'],
        });
      },
    });
  }

  public renewAccessToken(): void {
    this.authService.renewAccessToken().subscribe(console.log);
  }
}
