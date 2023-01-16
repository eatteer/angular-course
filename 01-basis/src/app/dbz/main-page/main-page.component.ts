import { Component } from '@angular/core';
import { Character } from '../types';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  public characters: Character[] = [];

  public constructor(private dbzService: DbzService) {
    this.characters = this.dbzService.characters;
  }

  public addCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
