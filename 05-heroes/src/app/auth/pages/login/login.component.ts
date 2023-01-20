import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent {
  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public login(): void {
    this.authService.login().subscribe(() => {
      this.router.navigate(['/heroes']);
    });
  }
}
