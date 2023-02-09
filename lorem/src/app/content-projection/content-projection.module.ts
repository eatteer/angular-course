import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentProjectionRoutingModule } from './content-projection-routing.module';
import { ContentProjectionPageComponent } from './pages/content-projection-page/content-projection-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  declarations: [ContentProjectionPageComponent, ParentComponent, ChildComponent],
  imports: [CommonModule, ContentProjectionRoutingModule],
})
export class ContentProjectionModule {}
