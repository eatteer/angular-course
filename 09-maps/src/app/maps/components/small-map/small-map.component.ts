import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-small-map',
  templateUrl: './small-map.component.html',
  styles: [],
})
export class SmallMapComponent implements AfterViewInit {
  @Input()
  public coordinates = {
    lng: 0,
    lat: 0,
  };

  @ViewChild('map')
  public mapElementRef!: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: this.mapElementRef.nativeElement,
      interactive: false,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: 15,
    });

    new mapboxgl.Marker()
      .setLngLat([this.coordinates.lng, this.coordinates.lat])
      .addTo(map);
  }
}
