import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRouterModule } from './heroes-router.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';

@NgModule({
  declarations: [
    AddComponent,
    HeroComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
  ],
  imports: [CommonModule, HeroesRouterModule, MaterialModule, FlexLayoutModule],
})
export class HeroesModule {}