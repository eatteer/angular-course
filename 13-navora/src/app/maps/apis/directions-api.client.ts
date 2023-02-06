import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DirectionsApiClient extends HttpClient {
  public baseUrl = 'https://api.mapbox.com/directions/v5/mapbox/driving';

  public constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(url: string) {
    const params = new HttpParams()
      .set('alternatives', false)
      .set('geometries', 'geojson')
      .set('overview', 'simplified')
      .set('steps', false)
      .set('access_token', environment.mapboxAccessToken);
    url = this.baseUrl + url;
    return super.get<T>(url, { params });
  }
}
