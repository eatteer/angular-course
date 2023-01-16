import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-countries-input',
  templateUrl: './countries-input.component.html',
  styles: [],
})
export class CountriesInputComponent implements OnInit {
  public debounceTime: number = 500;
  public term: string = '';
  public debouncer: Subject<string> = new Subject();

  @Input()
  public placeholder: string = '';

  @Output()
  public onSubmit: EventEmitter<string> = new EventEmitter();

  @Output()
  public onDebounce: EventEmitter<string> = new EventEmitter();

  public ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(this.debounceTime))
      .subscribe((_) => this.onDebounce.emit(this.term));
  }

  /**
   * Push `term` on every key pressed so its emision can be debounced 1000ms
   * by the `debounceTime` pipe of the `debouncer`.
   */
  public keyPressed(): void {
    this.debouncer.next(this.term);
  }

  public submit(): void {
    this.onSubmit.emit(this.term);
  }
}
