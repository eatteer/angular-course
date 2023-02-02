import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donuts',
  templateUrl: './donuts.component.html',
  styles: [],
})
export class DonutsComponent {
  public type: ChartType = 'doughnut';

  public data: ChartData<'doughnut'> = {
    labels: ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
    datasets: [{ data: [350, 450, 100] }],
  };
}
