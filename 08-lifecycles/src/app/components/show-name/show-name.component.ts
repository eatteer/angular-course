import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-show-name',
  templateUrl: './show-name.component.html',
  styles: [
    `
      .container {
        border: 1px solid blue;
      }
    `,
  ],
})
export class ShowNameComponent implements OnChanges {
  @Input()
  public name = '';

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
