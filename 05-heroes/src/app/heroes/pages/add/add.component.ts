import { Component, OnInit } from '@angular/core';
import {
  Publisher,
  Hero,
  AddPageMode,
} from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeletionComponent } from '../../components/confirm-deletion/confirm-deletion.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  // Pages variables
  public mode: AddPageMode = 'add';

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
    private heroesService: HeroesService,
    private matSnackBar: MatSnackBar,
    private matDialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const id: string | null = params.get('id');
      if (id) {
        this.mode = 'edit';
        this.heroesService.getById(id).subscribe((hero) => {
          this.hero = hero;
        });
      }
    });
  }

  public save(): void {
    if (this.hero.superhero.trim().length === 0) return;
    if (this.hero.alt_img!.trim().length === 0) return;
    switch (this.mode) {
      case 'add':
        this.heroesService.create(this.hero).subscribe((hero) => {
          const message: string = `${this.hero.superhero} was created`;
          this.openSnackBar(message);
          this.router.navigate(['/heroes/edit', hero.id]);
        });
        break;
      case 'edit':
        const message: string = `${this.hero.superhero} was updated`;
        this.openSnackBar(message);
        this.heroesService.update(this.hero).subscribe((hero) => {
          this.hero = hero;
        });
        break;
    }
  }

  public delete(): void {
    const dialog = this.matDialog.open(ConfirmDeletionComponent, {
      data: this.hero,
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.heroesService.delete(this.hero.id!).subscribe(() => {
          const message: string = `${this.hero.superhero} was deleted`;
          this.openSnackBar(message);
          this.router.navigate(['/heroes']);
        });
      }
    });
  }

  public openSnackBar(message: string): void {
    this.matSnackBar.open(message, 'Ok', {
      duration: 3000,
    });
  }
}
