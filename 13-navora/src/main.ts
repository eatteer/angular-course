import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import mapboxgl from 'mapbox-gl';

// Configure Mapbox
const accessToken = 'pk.eyJ1IjoiY29zc21vcyIsImEiOiJja3o1eTJyNGYwdmJ0MnZuZnZ0NWR5M25iIn0.6P9IHUZ4Zs1uFUpVCeQ8uA';
(mapboxgl as any).accessToken = accessToken;

if (!navigator.geolocation) {
  const message = 'Geolocation is not supported on your device';
  alert(message);
  throw new Error(message);
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
