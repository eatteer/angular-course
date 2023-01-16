import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ResultsComponent } from './results/results.component';
import { GifsPageComponent } from './gifs-page/gifs-page.component';

@NgModule({
  declarations: [SearchBarComponent, ResultsComponent, GifsPageComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [GifsPageComponent],
})
export class GifsModule {}
