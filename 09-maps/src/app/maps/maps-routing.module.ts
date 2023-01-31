import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullscreenComponent } from './pages/fullscreen/fullscreen.component';
import { MarkersComponent } from './pages/markers/markers.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { ZoomComponent } from './pages/zoom/zoom.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'fullscreen', component: FullscreenComponent },
      { path: 'zoom', component: ZoomComponent },
      { path: 'markers', component: MarkersComponent },
      { path: 'properties', component: PropertiesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule {}
