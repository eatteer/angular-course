import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      app-menu {
        position: fixed;
        margin: 1rem;
        z-index: 1000;
      }
    `,
  ],
})
export class AppComponent implements OnInit {
  public ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapBoxAccessToken;
  }
}
