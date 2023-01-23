import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  public form: FormGroup = this.fb.group({
    name: [null, [Validators.required, Validators.minLength(3)]],
  });

  public constructor(private fb: FormBuilder) {}

  public logForm(): void {
    console.log(this.form);
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
