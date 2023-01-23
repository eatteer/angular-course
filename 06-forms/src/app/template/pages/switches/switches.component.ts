import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [],
})
export class SwitchesComponent {
  @ViewChild('switchForm')
  public switchForm!: NgForm;

  public person = {
    genre: 'male',
    notificacions: true,
    terms: false,
  };
}
