import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  public form: FormGroup;

  public constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      product: [null, [Validators.required, Validators.minLength(3)]],
      price: [null, [Validators.required, Validators.min(1)]],
      stock: [null, [Validators.required, Validators.min(1)]],
    });
  }

  public submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    alert('Submitted');
  }

  public isControlInvalid(
    controlName: string,
    validationName: string
  ): boolean {
    const control = this.form.controls[controlName];
    const isTouched = control.touched;
    const isError = Boolean(control.errors?.[validationName]);
    const isInvalid = isTouched && isError;
    return isInvalid;
  }
}
