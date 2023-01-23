import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FavoriteGame, Person } from '../../interfaces/template.interfaces';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [],
})
export class DynamicsComponent {
  @ViewChild('dynamicForm')
  public dynamicForm!: NgForm;

  public person: Person = {
    name: 'Juan',
    favoriteGames: [
      {
        id: 1,
        name: 'Metal Gear',
      },
      {
        id: 2,
        name: 'Death Stranding',
      },
    ],
  };

  public isNameInvalid(): boolean {
    const isInvalid: boolean =
      this.dynamicForm?.controls['name']?.touched &&
      this.dynamicForm?.controls['name']?.invalid;
    return isInvalid;
  }

  public addFavoriteGame(): void {
    const favoriteGameControl = this.dynamicForm.form.controls['favoriteGame'];
    const favoriteGame: FavoriteGame = {
      id: this.person.favoriteGames.length + 1,
      name: favoriteGameControl.value,
    };
    favoriteGameControl.reset();
    this.person.favoriteGames.push(favoriteGame);
  }

  public deleteFavoriteGame(index: number): void {
    this.person.favoriteGames.splice(index, 1);
  }

  public submit(): void {
    console.log('Submitted');
  }
}
