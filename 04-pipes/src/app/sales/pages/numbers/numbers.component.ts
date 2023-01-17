import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [],
})
export class NumbersComponent {
  public netSales: number = 2_567_789.5567;
  public percentGain: number = 0.48;
}
