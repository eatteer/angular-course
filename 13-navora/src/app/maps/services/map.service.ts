import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker } from 'mapbox-gl';
import { Observable } from 'rxjs';
import { DirectionsApiClient } from '../apis/directions-api.client';
import { DirectionsResponse } from '../interfaces/directions.interfaces';
import { Feature } from '../interfaces/places.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MapService {
  private map!: Map;
  private markersOfResults: Marker[] = [];

  public constructor(private directionsApiClient: DirectionsApiClient) {}

  public getMap(): Map {
    return this.map;
  }

  public setMap(map: Map): void {
    this.map = map;
  }

  public flyTo(center: LngLatLike): void {
    this.map.flyTo({ zoom: 15, center });
  }

  public createMarkersOfResults(features: Feature[]): void {
    // Remove current markers from map
    this.markersOfResults.forEach((marker) => marker.remove());

    // Create new markers from results
    const markers = features.map((feature) => {
      const [lng, lat] = feature.center;
      const marker = new Marker().setLngLat([lng, lat]).addTo(this.map);
      return marker;
    });

    this.markersOfResults = markers;

    const bounds = new LngLatBounds();

    this.markersOfResults.forEach((marker) => {
      bounds.extend(marker.getLngLat());
    });

    this.map.fitBounds(bounds, {
      padding: 200,
    });
  }

  public getRouteBetweenPoints(
    start: [number, number],
    end: [number, number]
  ): Observable<DirectionsResponse> {
    const [startLng, startLat] = start;
    const [endLng, endLat] = end;
    const url = `/${startLng},${startLat};${endLng},${endLat}`;
    return this.directionsApiClient.get<DirectionsResponse>(url);
  }
}
