import { ParagraphComponentComponent } from '../paragraph-component/paragraph-component.component';
import {
  Component,
  ContentChild,
  ElementRef,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent implements AfterContentInit {
  @ContentChild('paragraph')
  public paragraphElementRef!: ElementRef<HTMLParagraphElement>;

  @ContentChild(ParagraphComponentComponent)
  public paragraphComponentRef!: ParagraphComponentComponent;

  public constructor() {
    console.log('constructor()');
    console.log(`
    Here, in the constructor method neither the projected content paragraph
    element or the projected content paragraph component are available since
    they have not been initializated
    `);
    console.log(
      'Projected content paragraph element reference: ',
      this.paragraphElementRef
    );
    console.log(
      'Projected content paragraph component reference: ',
      this.paragraphComponentRef
    );
  }

  public ngAfterContentInit(): void {
    console.log('ngAfterContentInit()');
    console.log(`
    Here, in the ngAfterContentInit method the projected content paragraph
    element and the projected content paragraph component are available since
    they have been initializated
    `);
    console.log(
      'Projected content paragraph element reference: ',
      this.paragraphElementRef
    );
    console.log(
      'Projected content paragraph component reference: ',
      this.paragraphComponentRef
    );
  }
}
