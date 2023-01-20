import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  public initialValues = {
    product: '',
    price: 1,
    stock: 10,
  };

  @ViewChild('basicForm')
  public basicForm!: NgForm;

  public submit(): void {
    console.log(this.basicForm);
    this.basicForm.resetForm(this.initialValues);
  }

  public isInvalid(name: string): boolean {
    const isInvalid: boolean =
      this.basicForm?.form.controls?.[name]?.touched &&
      this.basicForm?.form.controls?.[name]?.invalid;
    return isInvalid;
  }
}
