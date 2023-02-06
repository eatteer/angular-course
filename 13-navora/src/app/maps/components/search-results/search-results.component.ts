import { Component } from '@angular/core';
import { AnySourceData, LngLatBounds } from 'mapbox-gl';
import { Route } from '../../interfaces/directions.interfaces';
import { Feature } from '../../interfaces/places.interfaces';
import { MapService, PlacesService } from '../../services';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styles: [],
})
export class SearchResultsComponent {
  public selectedPlace: string = '';

  public constructor(
    private placesService: PlacesService,
    private mapService: MapService
  ) {}

  public get places(): Feature[] {
    return this.placesService.places;
  }

  public flyTo(place: Feature): void {
    const [lng, lat] = place.center;
    this.selectedPlace = place.id;
    this.mapService.flyTo([lng, lat]);
  }

  public getRouteBetweenPoints(place: Feature) {
    const start = this.placesService.userLocation as [number, number];
    const end = place.center as [number, number];
    this.mapService.getRouteBetweenPoints(start, end).subscribe((response) => {
      this.drawPolyline(response.routes[0]);
    });
  }

  public drawPolyline(route: Route): void {
    console.log({ kms: route.distance / 1000, duration: route.duration });

    const coords = route.geometry.coordinates;
    const bounds = new LngLatBounds();
    coords.forEach((coord) => {
      bounds.extend(coord as [number, number]);
    });

    this.mapService.getMap().fitBounds(bounds, { padding: 200 });

    const sourceData: AnySourceData = {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {},
            geometry: { type: 'LineString', coordinates: coords },
          },
        ],
      },
    };

    if (this.mapService.getMap().getSource('source')) {
      this.mapService.getMap().removeLayer('layer');
      this.mapService.getMap().removeSource('source');
    }
    this.mapService.getMap().addSource('source', sourceData);
    this.mapService.getMap().addLayer({
      id: 'layer',
      type: 'line',
      source: 'source',
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': 'black',
        'line-width': 3,
      },
    });
  }
}
