import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

interface FormSchema {
  name: FormControl<string | null>;
  favoriteGame: FormControl<string | null>;
  favoriteGames: FormArray<FormControl<string | null>>;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  public form: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGame: [''],
    favoriteGames: this.fb.array(
      [
        ['Metal Gear', [Validators.required]],
        ['Death Stranding', [Validators.required]],
      ],
      [Validators.required]
    ),
  });

  public constructor(private fb: FormBuilder) {}

  public get favoriteGames(): FormArray {
    return this.form.get('favoriteGames') as FormArray;
  }

  public addFavoriteGame(): void {
    const control = this.form.controls['favoriteGame'];
    if (control.invalid) return;
    const { value } = control;
    const newControl = new FormControl(value, [Validators.required]);
    this.favoriteGames.push(newControl);
    control.reset();
  }

  public removeFavoriteGame(index: number): void {
    this.favoriteGames.removeAt(index);
  }

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
