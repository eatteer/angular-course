import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapBoxAccessToken;
  }
}
