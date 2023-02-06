import { Component } from '@angular/core';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-fly-to-my-location',
  templateUrl: './fly-to-my-location.component.html',
  styles: [],
})
export class FlyToMyLocationComponent {
  public constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  public flyToMyLocation(): void {
    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
