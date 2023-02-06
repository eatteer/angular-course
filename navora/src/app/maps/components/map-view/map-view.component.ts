import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styles: [],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('map')
  public mapReference!: ElementRef<HTMLDivElement>;

  public constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  public ngAfterViewInit(): void {
    const map = new Map({
      container: this.mapReference.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.placesService.userLocation,
      zoom: 15,
    });

    const html = `<h3 class="text-lg font-bold">I'm here</h3>`;
    const popup = new Popup({ closeButton: false }).setHTML(html);

    new Marker()
      .setLngLat(this.placesService.userLocation!)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
