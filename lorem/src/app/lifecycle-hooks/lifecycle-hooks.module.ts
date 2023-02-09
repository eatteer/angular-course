import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifecycleHooksRoutingModule } from './lifecycle-hooks-routing.module';
import { AfterViewInitPageComponent } from './pages/after-view-init-page/after-view-init-page.component';
import { AfterContentInitPageComponent } from './pages/after-content-init-page/after-content-init-page.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { ParagraphComponentComponent } from './components/paragraph-component/paragraph-component.component';
import { LifecycleHooksPageComponent } from './pages/lifecycle-hooks-page/lifecycle-hooks-page.component';

@NgModule({
  declarations: [
    AfterViewInitPageComponent,
    AfterContentInitPageComponent,
    ParentComponent,
    ChildComponent,
    ParagraphComponentComponent,
    LifecycleHooksPageComponent,
  ],
  imports: [CommonModule, LifecycleHooksRoutingModule],
})
export class LifecycleHooksModule {}
