import { Component } from '@angular/core';
import { Route } from './interfaces/routes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  public routes: Route[] = [
    {
      label: 'Charts',
      path: '/charts',
    },
    {
      label: 'About',
      path: '/about',
    },
  ];
}
