import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './pages/charts/charts.component';
import { BarsComponent } from './pages/bars/bars.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { DoubleComponent } from './pages/double/double.component';
import { HttpDonutsComponent } from './pages/http-donuts/http-donuts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'bars',
        component: BarsComponent,
      },
      {
        path: 'double',
        component: DoubleComponent,
      },
      {
        path: 'donuts',
        component: DonutsComponent,
      },
      {
        path: 'http-donuts',
        component: HttpDonutsComponent,
      },
      {
        path: '**',
        redirectTo: 'bars',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
