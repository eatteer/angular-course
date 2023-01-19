import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, map, Observable, Subscriber } from 'rxjs';
import { Hero } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 0.3rem;
      }
    `,
  ],
})
export class HeroComponent implements OnInit {
  public hero?: Hero;

  public constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private heroesService: HeroesService
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        // Subscribe to Observable<ParamMap> and return Observable<string>
        switchMap((params) => {
          return new Observable<string>((subscriber) =>
            subscriber.next(params.get('id')!)
          );
        }),
        // Subscribe to Observable<string> and return Observable<Hero>
        switchMap((id) => {
          return this.heroesService.getById(id);
        })
      )
      // Subscribe to Observable<Hero>
      .subscribe((hero) => {
        this.hero = hero;
      });
  }

  public navigateBack(): void {
    this.router.navigate(['/heroes/list']);
  }
}
