import { Component } from '@angular/core';

@Component({ selector: 'app-counter', templateUrl: './counter.component.html' })
export class CounterComponent {
  public counter: number = 0;
  public base: number = 5;

  public accumulate(base: number): void {
    this.counter += base;
  }
}
