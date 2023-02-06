import { Component } from '@angular/core';
import { StorageService } from '../storage.service';
import { Character } from '../interfaces/character.interface';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {
  public characters: Character[] = [];
  public users: User[] = [];

  public constructor(private storageService: StorageService) {
    this.storageService.getCharacters$().subscribe((characters) => {
      this.characters = characters;
    });

    // this.characters = storageService.characters;

    this.storageService.getUsers$().subscribe((users) => {
      this.users = users;
    });
  }

  public fetchUsers(): void {
    this.storageService.fetchUsers();
  }
}
