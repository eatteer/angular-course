import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent {
  private ms = 500;
  private debounceTimeout?: NodeJS.Timeout;

  public constructor(private placesService: PlacesService) {}

  public onKeyUp(query: string): void {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }

    this.debounceTimeout = setTimeout(() => {
      this.placesService.getPlaces(query).subscribe();
    }, this.ms);
  }
}
