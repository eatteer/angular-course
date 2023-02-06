import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Character } from './interfaces/character.interface';
import { User } from './interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  // Source of data
  // Should be private
  public characters: Character[] = [];

  public numbers: number[] = [];

  // Subjects
  private characters$ = new BehaviorSubject<Character[]>([]);
  private users$ = new BehaviorSubject<User[]>([]);

  public constructor(private httpClient: HttpClient) {}

  // Characters related members
  public getCharacters$(): Observable<Character[]> {
    return this.characters$.asObservable();
  }

  public addCharacter(character: Character): void {
    // Modify source of data
    // this.characters = [...this.characters, character];
    this.characters.push(character);

    // Push data
    this.characters$.next(this.characters);
  }

  // Users related members
  public fetchUsers(): void {
    this.httpClient
      .get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users) => {
        this.users$.next(users);
      });
  }

  public getUsers$(): Observable<User[]> {
    return this.users$.asObservable();
  }

  public addNumbers(): void {
    this.numbers = [...this.numbers, this.numbers.length++];
  }
}
