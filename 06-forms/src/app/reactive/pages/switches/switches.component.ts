import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent implements OnInit {
  public form: FormGroup = this.fb.group({
    genre: ['female', [Validators.required]],
    notifications: [true, [Validators.required]],
    terms: [false, [Validators.requiredTrue]],
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

  public submit(): void {
    // this.person = this.form.value;
  }
}
