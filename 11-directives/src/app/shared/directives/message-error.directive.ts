import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appMessageError]',
})
export class MessageErrorDirective implements OnInit, OnChanges {
  private _errorMessage = 'Default error message';
  private _errorMessageColor = '#000';

  // If values are passed, setters are executed
  @Input()
  public set errorMessage(message: string) {
    console.log('set errorMessage: appMessageError directive');
    this._errorMessage = message;
    this.setMessage();
  }

  @Input()
  public set errorMessageColor(color: string) {
    console.log('set errorMessageColor: appMessageError directive');
    this._errorMessageColor = color;
    this.setColor();
  }

  private nativeElement!: HTMLElement;

  public constructor(private elementRef: ElementRef<HTMLElement>) {
    console.log('constructor: appMessageError directive');
    this.nativeElement = this.elementRef.nativeElement;
  }

  public ngOnInit(): void {
    console.log('ngOnInit: appMessageError directive');
    this.configureElement();
  }

  public ngOnChanges(simpleChanges: SimpleChanges): void {
    // console.log(simpleChanges);
    // if (simpleChanges['errorMessage']) {
    //   const { currentValue, previousValue } = simpleChanges['errorMessage'];
    //   if (currentValue !== previousValue) {
    //     this.setMessage();
    //   }
    // }
    // if (simpleChanges['errorMessageColor']) {
    //   const { currentValue, previousValue } =
    //     simpleChanges['errorMessageColor'];
    //   if (currentValue !== previousValue) {
    //     this.setColor();
    //   }
    // }
  }

  public configureElement(): void {
    this.setMessage();
    this.setColor();
  }

  public setMessage(): void {
    this.nativeElement.textContent = this._errorMessage;
  }

  public setColor(): void {
    this.nativeElement.style.color = this._errorMessageColor;
  }
}
