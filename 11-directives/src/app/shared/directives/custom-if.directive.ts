import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appCustomIf]',
})
export class CustomIfDirective {
  @Input()
  set appCustomIf(bool: boolean) {
    if (bool) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  public constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {
    console.log('constructor: appCustomIf directive');
  }
}
