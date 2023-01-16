import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  public heroes: string[] = ['Spider-Man', 'Iron Man', 'Hulk', 'Thor'];
  public deletedHeroes: string[] = [];

  public deleteRandomHero(): void {
    const randomIndex = Math.floor(Math.random() * this.heroes.length);
    const deletedHero = this.heroes[randomIndex];
    this.heroes.splice(randomIndex, 1);
    this.deletedHeroes.push(deletedHero);
  }
}
