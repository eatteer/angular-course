import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { StorageService } from '../storage.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [],
})
export class FormComponent {
  public color = 'red';

  private isFood = true;
  private food = ['Apple', 'Banana'];
  private colors = ['Red', 'Yellow'];

  public numbers: number[] = [];
  public numbersFromService: number[] = [];

  public foodAndColors = this.food;

  public form = this.fb.group({
    name: [''],
    quirk: [''],
  });

  public constructor(
    private fb: NonNullableFormBuilder,
    private storageService: StorageService
  ) {
    this.numbersFromService = this.storageService.numbers;
  }

  public submit(): void {
    this.storageService.addCharacter(this.form.value as Character);
    this.form.reset();
  }

  public toggleColor(): void {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }

  public toggleFoodAndColors(): void {
    this.foodAndColors = this.isFood ? this.colors : this.food;
    this.isFood = !this.isFood;
  }

  public addNumber(): void {
    this.numbers = [...this.numbers, this.numbers.length++];
  }

  // public get numbersFromService(): number[] {
  //   console.log('get numbersFromService');
  //   return this.storageService.numbers;
  // }

  public addNumbersFromService(): void {
    this.storageService.addNumbers();
  }
}
