import { Component } from '@angular/core';
import { Character } from '../types';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
})
export class CharactersComponent {
  public characters: Character[] = [];

  public constructor(private dbzService: DbzService) {
    this.characters = this.dbzService.characters;
  }

  // public get characters() {
  //   return this.dbzService.characters;
  // }
}
