import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../types';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [],
})
export class ResultsComponent {
  public constructor(private gifsService: GifsService) {}

  public get latestResults(): Gif[] {
    return this.gifsService.latestResults;
  }
}
