import { Component } from '@angular/core';
import { Character } from '../types';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  public character: Character = {
    name: '',
    power: 0,
  };

  public constructor(private dbzService: DbzService) {}

  public addCharacter(): void {
    if (this.character.name.trim().length === 0) return;
    this.dbzService.addCharacter(this.character);
    this.clearInputs();
  }

  public clearInputs(): void {
    this.character = {
      name: '',
      power: 0,
    };
  }
}
