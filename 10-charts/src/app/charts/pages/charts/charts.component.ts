import { Component } from '@angular/core';
import { Route } from '../../../interfaces/routes.interface';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styles: [],
})
export class ChartsComponent {
  public routes: Route[] = [
    {
      label: 'Bars',
      path: '/charts/bars',
    },
    {
      label: 'Double',
      path: '/charts/double',
    },
    {
      label: 'Donuts',
      path: '/charts/donuts',
    },
    {
      label: 'Http donuts',
      path: '/charts/http-donuts',
    },
  ];
}
