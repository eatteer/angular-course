import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Hero } from '../../interfaces/heroes.interfaces';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  public heroes: Hero[] = [];

  public constructor(private heroesService: HeroesService) {}

  public ngOnInit(): void {
    this.heroesService
      .getAll()
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
