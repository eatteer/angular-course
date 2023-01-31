import {
  AfterViewInit,
  Component,
  ElementRef,
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
      #zoom-range {
        position: fixed;
        bottom: 0;
        margin: 3rem 2rem;
        width: 320px;
      }
    `,
  ],
})
export class ZoomComponent implements OnInit, AfterViewInit {
  // map it is undefined until ngAfterViewInit hook
  public map!: mapboxgl.Map;

  public minZoom: number = 0.56;
  public maxZoom: number = 18;

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
      center: [-75.7487774, 4.7940083],
      zoom: this.zoomControl.value,
    });

    this.map.on('zoom', (_) => {
      this.zoomControl.setValue(this.map.getZoom(), { emitEvent: false });
    });

    // Restrict zoom
    this.map.on('zoomend', (_) => {
      if (this.map.getZoom() > this.maxZoom) {
        this.map.zoomTo(this.maxZoom);
      }
    });

    this.zoomControl.valueChanges.subscribe((zoom) => {
      this.map.setZoom(zoom);
    });
  }

  public zoomOut(): void {
    this.map.zoomOut();
  }

  public zoomIn(): void {
    this.map.zoomIn();
  }
}
