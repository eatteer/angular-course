import { Injectable } from '@angular/core';
import {
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
  FormGroup,
} from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  public namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  public emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  public constructor() {}

  public debviluke: ValidatorFn = (control: AbstractControl<string>) => {
    const value = control.value.trim().toLowerCase();
    if (value === 'debviluke') {
      const error: ValidationErrors = {
        debviluke: true,
      };
      return error;
    }
    return null;
  };

  public controlsMatch(
    controlNameA: string,
    controlNameB: string,
    callbackError: (error: ValidationErrors | null) => void,
    validateEmpty = true
  ) {
    const validator: ValidatorFn = (formGroup: AbstractControl) => {
      const controlA = formGroup.get(controlNameA);
      const controlB = formGroup.get(controlNameB);
      const valueA = controlA?.value;
      const valueB = controlB?.value;
      let error: ValidationErrors | null = null;
      if (validateEmpty && (valueA === '' || valueB === '')) return null;
      if (valueA !== valueB) error = { controlsMatch: true };
      callbackError(error);
      return error;
    };
    return validator;
  }
}
