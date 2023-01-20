import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/auth.interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      mat-sidenav {
        width: 300px;
      }

      .container-content {
        margin: 2rem;
      }
    `,
  ],
})
export class HomeComponent {
  public user!: User;

  public constructor(private router: Router, private authService: AuthService) {
    this.user = this.authService.user!;
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
