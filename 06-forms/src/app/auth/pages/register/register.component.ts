import { Component } from '@angular/core';
import { Validators, NonNullableFormBuilder } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { UniqueEmailValidatorService } from '../../../shared/validators/unique-email-validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [],
})
export class RegisterComponent {
  public form = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.namePattern),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(this.validatorsService.emailPattern),
        ],
        [this.uniqueEmailValidatorService],
      ],
      username: ['', [Validators.required, this.validatorsService.debviluke]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [
        this.validatorsService.controlsMatch(
          'password',
          'confirmPassword',
          (error) => {
            const control = this.form.controls.confirmPassword;
            if (error) {
              control.setErrors({
                confirmPassword: true,
              });
            } else {
              delete control.errors?.['confirmPassword'];
            }
          }
        ),
      ],
    }
  );

  public constructor(
    private fb: NonNullableFormBuilder,
    private validatorsService: ValidatorsService,
    private uniqueEmailValidatorService: UniqueEmailValidatorService
  ) {}

  public submit(): void {
    this.form.markAllAsTouched();
    // if (this.form.invalid) return;
    console.log(this.form);
  }

  public get nameErrorMessage() {
    const control = this.form.controls.name;
    const touched = control.touched;
    const errors = control.errors;
    if (errors?.['required'] && touched) return 'Name is required';
    if (errors?.['pattern'] && touched) return 'Invalid name format';
    return '';
  }

  public get emailErrorMessage() {
    const control = this.form.controls.email;
    const touched = control.touched;
    const errors = control.errors;
    if (errors?.['required'] && touched) return 'Email is required';
    if (errors?.['pattern'] && touched) return 'Invalid email format';
    if (errors?.['unique'] && touched) return 'Email is already taken';
    return '';
  }

  public get usernameErrorMessage() {
    const control = this.form.controls.username;
    const touched = control.touched;
    const errors = control.errors;
    if (errors?.['required'] && touched) return 'Username is required';
    if (errors?.['debviluke'] && touched) return 'Name cannot be debviluke';
    return '';
  }

  public get passwordErrorMessage() {
    const control = this.form.controls.password;
    const touched = control.touched;
    const errors = control.errors;
    if (errors?.['required'] && touched) return 'Password is required';
    return '';
  }

  public get confirmPasswordErrorMessage() {
    const control = this.form.controls.confirmPassword;
    const touched = control.touched;
    const errors = control.errors;
    if (errors?.['required'] && touched) return 'Confirm password is required';
    if (errors?.['confirmPassword'] && touched) return 'Passwords do not match';
    return '';
  }

  public printError(controlName: string) {
    const control = this.form.get(controlName)!;
    return control.errors;
  }
}
