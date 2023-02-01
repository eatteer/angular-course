import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styles: [
    `
      .zoom-range {
        position: fixed;
        bottom: 0;
        margin: 2rem;
        width: 350px;
        font-size: 0.9rem;
      }
    `,
  ],
})
export class ZoomComponent implements OnInit, AfterViewInit, OnDestroy {
  // map it is undefined until ngAfterViewInit hook
  public map!: mapboxgl.Map;

  public zoom = {
    min: 0.56,
    max: 18,
  };

  public coordinates = {
    lng: -75.7487774,
    lat: 4.7940083,
  };

  public zoomControl: FormControl<number> = new FormControl(15, {
    nonNullable: true,
  });

  // mapElementRef it is undefined until ngAfterViewInit hook
  @ViewChild('map')
  public mapElementRef!: ElementRef<HTMLDivElement>;

  public constructor() {
    console.log('constructor');
  }

  public ngOnInit(): void {
    console.log('ngOnInit');
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    this.map = new mapboxgl.Map({
      container: this.mapElementRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: this.zoomControl.value,
    });

    this.map.on('zoom', (event) => {
      const { target } = event;
      this.zoomControl.setValue(target.getZoom(), { emitEvent: false });
    });

    // Restrict zoom
    this.map.on('zoomend', (event) => {
      const { target } = event;
      if (target.getZoom() > this.zoom.max) {
        this.map.zoomTo(this.zoom.max);
      }
    });

    this.map.on('move', (event) => {
      const { target } = event;
      const { lng, lat } = target.getCenter();
      this.coordinates.lng = lng;
      this.coordinates.lat = lat;
    });

    this.zoomControl.valueChanges.subscribe((zoom) => {
      this.map.setZoom(zoom);
    });
  }

  public ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }

  public zoomOut(): void {
    this.map.zoomOut();
  }

  public zoomIn(): void {
    this.map.zoomIn();
  }
}
