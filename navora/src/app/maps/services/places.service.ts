import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap, of } from 'rxjs';
import { PlacesApiClient } from '../apis/places-api.client';
import { Feature, PlacesResponse } from '../interfaces/places.interfaces';
import { MapService } from './map.service';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];
  public places: Feature[] = [];

  public constructor(
    private placesApiClient: PlacesApiClient,
    private mapService: MapService
  ) {
    this.getUserLocation()
      .then((coords) => {
        this.userLocation = coords;
      })
      .catch((error) => {
        alert('Current position could not be obtained');
        console.log(error);
      });
  }

  public get isUserLocationReady(): boolean {
    return Boolean(this.userLocation);
  }

  public async getUserLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (geoPosition) => {
          const coords: [number, number] = [
            geoPosition.coords.longitude,
            geoPosition.coords.latitude,
          ];
          resolve(coords);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  public getPlaces(query: string): Observable<PlacesResponse> {
    this.places = [];
    const proximity = this.userLocation?.join(',')!;
    const params = new HttpParams().set('proximity', proximity);
    return this.placesApiClient
      .get<PlacesResponse>(`/${query}.json`, { params })
      .pipe(
        tap((response) => {
          this.places = response.features;
          this.mapService.createMarkersOfResults(this.places);
        })
      );
  }
}
