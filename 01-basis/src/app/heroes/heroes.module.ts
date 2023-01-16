import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [HeroComponent, ListComponent],
  imports: [
    /* Import what CommonModule exports for using inside HeroesModule's Components */ CommonModule,
  ],
  exports: [HeroComponent, ListComponent],
})
export class HeroesModule {}
