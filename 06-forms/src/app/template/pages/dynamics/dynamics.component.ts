import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  @ViewChild('dynamicForm')
  public dynamicForm!: NgForm;

  public submit(): void {
    console.log(this.dynamicForm);
  }
}
