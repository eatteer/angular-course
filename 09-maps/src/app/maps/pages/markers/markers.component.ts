import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styles: [
    `
      .marks-menu {
        position: fixed;
        top: 0;
        right: 0;
        margin: 2rem;
        z-index: 1000;
      }
    `,
  ],
})
export class MarkersComponent implements AfterViewInit {
  public map!: mapboxgl.Map;

  public zoom = {
    initial: 15,
    min: 0.56,
    max: 18,
  };

  public coordinates = {
    lng: -75.7487774,
    lat: 4.7940083,
  };

  @ViewChild('map')
  public mapElementRef!: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapElementRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: this.zoom.initial,
    });
  }

  public addMarker(): void {
    new mapboxgl.Marker({ draggable: true })
      .setLngLat({
        lng: this.coordinates.lng,
        lat: this.coordinates.lat,
      })
      .addTo(this.map);
  }
}
