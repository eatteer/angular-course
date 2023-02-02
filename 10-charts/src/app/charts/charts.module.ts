import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { ChartsRoutingModule } from './charts-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoubleComponent } from './pages/double/double.component';
import { DonutsComponent } from './pages/donuts/donuts.component';
import { HttpDonutsComponent } from './pages/http-donuts/http-donuts.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsComponent } from './pages/charts/charts.component';

@NgModule({
  declarations: [
    BarsComponent,
    DoubleComponent,
    DonutsComponent,
    HttpDonutsComponent,
    BarChartComponent,
    ChartsComponent,
  ],
  imports: [CommonModule, NgChartsModule, ChartsRoutingModule],
})
export class ChartsModule {}
