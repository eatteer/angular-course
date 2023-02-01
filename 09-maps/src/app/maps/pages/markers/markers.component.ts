import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Marker, LocalStorageMarker } from '../../interfaces/maps.interfaces';

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

  public markers: Marker[] = [];

  @ViewChild('map')
  public mapElementRef!: ElementRef<HTMLDivElement>;

  public ngAfterViewInit(): void {
    this.map = new mapboxgl.Map({
      container: this.mapElementRef.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [this.coordinates.lng, this.coordinates.lat],
      zoom: this.zoom.initial,
    });

    this.loadMarkersFromLocalStorage();

    this.markers.forEach((marker) => {
      marker.mapboxMarker.on('dragend', () => this.saveMarkersToLocalStorage());
    });
  }

  public addMarker(): void {
    const marker = this.createMarker();
    marker.mapboxMarker.on('dragend', () => this.saveMarkersToLocalStorage());
    this.markers.push(marker);
    this.saveMarkersToLocalStorage();
  }

  public createMarker(): Marker {
    const { lng, lat } = this.map.getCenter();
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const marker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat({ lng, lat })
      .addTo(this.map);
    return { mapboxMarker: marker, color };
  }

  public removeMarker(index: number): void {
    this.markers[index].mapboxMarker.remove();
    this.markers.splice(index, 1);
    this.saveMarkersToLocalStorage();
  }

  public flyToMarker(marker: mapboxgl.Marker): void {
    const { lng, lat } = marker.getLngLat();
    this.map.flyTo({ center: { lng, lat } });
  }

  public createLocalStorageMarker(marker: Marker): LocalStorageMarker {
    const { color } = marker;
    const { lng, lat } = marker.mapboxMarker.getLngLat();
    const localStorageMarker: LocalStorageMarker = {
      color,
      coordinates: { lng, lat },
    };
    return localStorageMarker;
  }

  public createMarkerFromLocalStorageMarker(
    localStorageMarker: LocalStorageMarker
  ): Marker {
    const { color } = localStorageMarker;
    const { lng, lat } = localStorageMarker.coordinates;
    const marker = new mapboxgl.Marker({ draggable: true, color })
      .setLngLat({ lng, lat })
      .addTo(this.map);
    return { mapboxMarker: marker, color };
  }

  public saveMarkersToLocalStorage(): void {
    const localStorageMarkers = this.markers.map((marker) =>
      this.createLocalStorageMarker(marker)
    );
    localStorage.setItem('markers', JSON.stringify(localStorageMarkers));
  }

  public loadMarkersFromLocalStorage(): void {
    const rawLocalStorageMarkers = localStorage.getItem('markers');
    if (!rawLocalStorageMarkers) return;
    const localStorageMarkers = JSON.parse(
      rawLocalStorageMarkers
    ) as LocalStorageMarker[];
    localStorageMarkers.forEach((localStorageMarker) => {
      const marker =
        this.createMarkerFromLocalStorageMarker(localStorageMarker);
      this.markers.push(marker);
    });
  }
}
