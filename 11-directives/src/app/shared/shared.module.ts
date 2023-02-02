import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageErrorDirective } from './directives/message-error.directive';
import { CustomIfDirective } from './directives/custom-if.directive';

@NgModule({
  declarations: [MessageErrorDirective, CustomIfDirective],
  imports: [CommonModule],
  exports: [MessageErrorDirective, CustomIfDirective],
})
export class SharedModule {}
