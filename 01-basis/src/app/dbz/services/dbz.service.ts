import { Injectable } from '@angular/core';
import { Character } from '../types';

@Injectable()
export class DbzService {
  public characters: Character[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 8500,
    },
  ];

  public addCharacter(character: Character): void {
    this.characters.push(character);
  }
}
