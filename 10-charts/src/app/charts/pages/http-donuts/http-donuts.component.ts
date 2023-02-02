import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../../services/charts.service';
import { ChartType, ChartData } from 'chart.js';
import { delay, map } from 'rxjs';

@Component({
  selector: 'app-http-donuts',
  templateUrl: './http-donuts.component.html',
  styles: [],
})
export class HttpDonutsComponent implements OnInit {
  public data?: ChartData<'doughnut'>;

  public type: ChartType = 'doughnut';

  public constructor(private chartsService: ChartsService) {}

  public ngOnInit(): void {
    this.chartsService
      .getUsersStatistics()
      .pipe(
        map((data) => {
          const labels = this.formatLabels(Object.keys(data));
          const datasets = [{ data: Object.values(data) as number[] }];
          const chartData: ChartData<'doughnut'> = { labels, datasets };
          return chartData;
        }),
        delay(1000)
      )
      .subscribe((data) => (this.data = data));
  }

  private formatLabels(unformattedLabels: string[]): string[] {
    const labels = unformattedLabels.map((label) => {
      const substrings = label.split('-');
      const upperSubstrings = substrings.map((substring) => {
        const f = `${substring[0].toUpperCase()}${substring.slice(1)}`;
        return f;
      });
      const formattedLabel = upperSubstrings.join(' ');
      return formattedLabel;
    });
    return labels;
  }
}
