import { Component } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styles: [],
})
export class MapPageComponent {
  public constructor(private placesService: PlacesService) {}

  public get isUserLocationReady(): boolean {
    return this.placesService.isUserLocationReady;
  }
}
