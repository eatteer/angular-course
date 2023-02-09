import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph-component',
  templateUrl: './paragraph-component.component.html',
  styles: [],
})
export class ParagraphComponentComponent {
  @Input()
  public text = '';

  public printText(): void {
    console.log(this.text);
  }
}
