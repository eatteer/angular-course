import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  public favoriteVehicles = [
    { name: 'Bike', id: 1 },
    { name: 'Car', id: 2 },
    { name: 'Boat', id: 3 },
    { name: 'Airplane', id: 4 },
  ];

  public form: FormGroup = this.fb.group({
    genre: ['female', [Validators.required]],
    notifications: [true, [Validators.required]],
    terms: [false, [Validators.requiredTrue]],
    favoriteVehicles: this.fb.array([], [Validators.required]),
  });

  public person = {
    genre: 'male',
    notifications: false,
    terms: true,
  };

  public constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.form.reset({ ...this.person });

    // Update person values on form value changes
    this.form.valueChanges.subscribe((values) => {
      this.person = values;
    });
  }

  public onChangeCheckbox(event: Event): void {
    const checkbox = event.target as HTMLInputElement;
    const { checked } = checkbox;
    const value = Number(checkbox.value);
    const fv = this.form.controls['favoriteVehicles'] as FormArray;
    if (checked) {
      const control = new FormControl(value);
      fv.push(control);
    } else {
      const i = fv.controls.findIndex((control) => control.value === value);
      fv.removeAt(i);
    }
  }

  public submit(): void {
    // this.person = this.form.value;
  }
}
