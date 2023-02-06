import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class PlacesApiClient extends HttpClient {
  public baseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places';

  public constructor(handler: HttpHandler) {
    super(handler);
  }

  public override get<T>(
    url: string,
    options: {
      params?:
        | HttpParams
        | {
            [param: string]:
              | string
              | number
              | boolean
              | ReadonlyArray<string | number | boolean>;
          };
    }
  ) {
    const params = new HttpParams()
      .set('limit', 5)
      .set('access_token', environment.mapboxAccessToken);
    url = this.baseUrl + url;
    return super.get<T>(url, { params, ...options.params });
  }
}
