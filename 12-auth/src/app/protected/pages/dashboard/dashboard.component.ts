import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .container {
        margin: 2rem;
      }
    `,
  ],
})
export class DashboardComponent implements OnInit {
  public user!: User;

  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public ngOnInit(): void {
    this.user = this.authService.user!;
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/auth']);
  }
}
