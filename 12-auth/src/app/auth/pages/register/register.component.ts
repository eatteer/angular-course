import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { RegisterRequest } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  public form = this.fb.group({
    name: ['Juan', [Validators.required]],
    email: ['eatteer@gmail.com', [Validators.required, Validators.email]],
    password: ['lovewony', [Validators.required, Validators.minLength(6)]],
  });

  public constructor(
    private fb: NonNullableFormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  public submit(): void {
    const { name, email, password } = this.form.getRawValue();
    const credentials: RegisterRequest = { name, email, password };
    this.authService.register(credentials).subscribe({
      next: (response) => {
        Swal.fire({
          icon: 'success',
          text: response.message,
        });
        this.router.navigate(['/auth/login']);
      },
      error: (httpError: HttpErrorResponse) => {
        Swal.fire({
          icon: 'error',
          text: httpError.error['message'],
        });
      },
    });
  }
}
