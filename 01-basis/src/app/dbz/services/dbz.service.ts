import { Injectable } from '@angular/core';
import { Character } from '../types';

@Injectable()
export class DbzService {
  // public characters: Character[] = [
  //   {
  //     name: 'Goku',
  //     power: 15000,
  //   },
  //   {
  //     name: 'Vegeta',
  //     power: 8500,
  //   },
  // ];

  public characters: Character[] = [];

  public addCharacter(character: Character): void {
    this.characters.push(character);
    // const newCharacters = [
    //   { name: 'Lorem', power: 0 },
    //   { name: 'Lorem2', power: 0 },
    // ];
    // this.characters = [...newCharacters];
  }
}
