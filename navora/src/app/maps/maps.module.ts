import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './pages/map-page/map-page.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FlyToMyLocationComponent } from './components/fly-to-my-location/fly-to-my-location.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';

@NgModule({
  declarations: [MapPageComponent, MapViewComponent, LoadingComponent, FlyToMyLocationComponent, SearchBarComponent, SearchResultsComponent],
  imports: [CommonModule],
  exports: [MapPageComponent],
})
export class MapsModule {}
