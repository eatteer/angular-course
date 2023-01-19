import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  public query: string = '';
  public suggestedHeroes: Hero[] = [];
  public hero?: Hero;

  public constructor(private heroesService: HeroesService) {}

  public getSuggestions(): void {
    if (this.query.trim().length === 0) return;
    this.heroesService.getSuggestions(this.query).subscribe((heroes) => {
      this.suggestedHeroes = heroes;
    });
  }

  public onSelectedHero(event: MatAutocompleteSelectedEvent): void {
    const hero: Hero = event.option.value;
    this.query = hero.superhero;
    this.heroesService.getById(hero.id!).subscribe((hero) => {
      this.hero = hero;
    });
  }
}
