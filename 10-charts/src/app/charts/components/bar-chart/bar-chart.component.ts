import { Component, Input, AfterViewInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

type ChartDirection = 'vertical' | 'horizontal';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styles: [],
})
export class BarChartComponent implements AfterViewInit {
  @Input()
  public direction: ChartDirection = 'vertical';

  @Input()
  public data: ChartData<'bar'> = { labels: [], datasets: [] };

  public type: ChartType = 'bar';
  public options: ChartConfiguration['options'] = {};

  public ngAfterViewInit(): void {
    switch (this.direction) {
      case 'horizontal':
        this.options!.indexAxis = 'y';
        break;
      default:
        this.options!.indexAxis = 'x';
    }
  }
}
