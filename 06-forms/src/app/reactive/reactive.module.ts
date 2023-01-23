import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicsComponent } from './pages/basics/basics.component';
import { DynamicsComponent } from './pages/dynamics/dynamics.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicsComponent, DynamicsComponent, SwitchesComponent],
  imports: [CommonModule, ReactiveRoutingModule, ReactiveFormsModule],
})
export class ReactiveModule {}
