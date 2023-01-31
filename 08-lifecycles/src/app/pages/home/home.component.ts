import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container {
        border: 1px solid red;
      }
    `,
  ],
})
export class HomeComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public name: string = 'Juan';
  public seconds!: number;
  private intervalSubscription!: Subscription;

  public constructor() {
    console.log('constructor');
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
    this.intervalSubscription = interval(1000).subscribe(
      (n) => (this.seconds = n)
    );
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  public ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  public ngOnDestroy(): void {
    console.log('ngOnDestroy');
    this.intervalSubscription?.unsubscribe();
  }

  public click(): void {}
}
