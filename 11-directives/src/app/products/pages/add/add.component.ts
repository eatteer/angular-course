import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  private defaultErrorMessage = 'This field is required';
  public errorMessage = this.defaultErrorMessage;
  public errorMessageColor = 'red';

  public form = this.fb.group({
    name: ['', [Validators.required]],
  });

  public constructor(private fb: NonNullableFormBuilder) {
    console.log('constructor: app-add component');
  }

  public ngOnInit(): void {
    console.log('ngOnInit: app-add component');
  }

  public isInvalid(controlName: string, validationName: string): boolean {
    const control = this.form.get(controlName)!;
    return control.touched && control?.hasError(validationName);
  }

  public changeErrorMessage(): void {
    const theCakeIsALie = 'The cake is a lie';
    this.errorMessage =
      this.errorMessage === theCakeIsALie
        ? this.defaultErrorMessage
        : theCakeIsALie;
  }

  public changeErrorMessageColor(): void {
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    this.errorMessageColor = color;
  }
}
