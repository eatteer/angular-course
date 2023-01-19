import { Component, OnInit } from '@angular/core';
import {
  Publisher,
  Hero,
  AddPageMode,
} from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [],
})
export class AddComponent implements OnInit {
  // Pages variables
  public pageMode: AddPageMode = 'add';

  // Form variables
  public publishers: Publisher[] = [Publisher.DCComics, Publisher.MarvelComics];
  public hero: Hero = {
    alt_img: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    superhero: '',
  };

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      if (id) {
        this.pageMode = 'edit';
        this.heroesService.getById(id).subscribe((hero) => {
          this.hero = hero;
        });
      }
    });
  }

  public save(): void {
    if (this.hero.superhero.trim().length === 0) return;
    switch (this.pageMode) {
      case 'add':
        this.heroesService.create(this.hero).subscribe((hero) => {
          this.router.navigate(['/heroes/edit', hero.id]);
        });
        break;
      case 'edit':
        this.heroesService.update(this.hero).subscribe((hero) => {
          this.hero = hero;
        });
        break;
    }
  }
}
