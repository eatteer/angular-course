import { Component } from '@angular/core';

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
export class HomeComponent {}
