import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { SmallMapComponent } from './components/small-map/small-map.component';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { ZoomComponent } from './pages/zoom/zoom.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SmallMapComponent,
    FullscreenComponent,
    MarkersComponent,
    ZoomComponent,
    PropertiesComponent,
  ],
  imports: [CommonModule, MapsRoutingModule, ReactiveFormsModule],
})
export class MapsModule {}
