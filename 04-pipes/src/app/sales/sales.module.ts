import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { UpperPipe } from './pipes/upper.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonsComponent } from './pages/uncommons/uncommons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    UpperPipe,
    FlyPipe,
    OrderPipe,
    NumbersComponent,
    UncommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
  imports: [CommonModule, PrimeNgModule],
  exports: [
    NumbersComponent,
    UncommonsComponent,
    BasicsComponent,
    OrderComponent,
  ],
})
export class SalesModule {}
