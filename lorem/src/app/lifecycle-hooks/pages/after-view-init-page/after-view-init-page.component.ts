import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ParagraphComponentComponent } from '../../components/paragraph-component/paragraph-component.component';

@Component({
  selector: 'app-after-view-init-page',
  templateUrl: './after-view-init-page.component.html',
  styles: [],
})
export class AfterViewInitPageComponent implements AfterViewInit {
  @ViewChild('paragraph')
  public paragraphElementRef!: ElementRef<HTMLParagraphElement>;

  @ViewChild('one')
  public paragraphComponentRef!: ParagraphComponentComponent;
  public constructor() {
    console.log('constructor()');
    console.log(`
    Here, in the constructor method neither the view paragraph
    element or the view paragraph component are available since
    they have not been initializated
    `);
    console.log('View paragraph element reference: ', this.paragraphElementRef);
    console.log(
      'View paragraph component reference: ',
      this.paragraphComponentRef
    );
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit()');
    console.log(`
    Here, in the ngAfterViewInit method the view paragraph
    element and the view paragraph component are available since
    they have been initializated
    `);
    console.log('View paragraph element reference: ', this.paragraphElementRef);
    console.log(
      'View paragraph component reference: ',
      this.paragraphComponentRef
    );
    this.paragraphComponentRef.printText();
  }
}
