import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfterViewInitPageComponent } from './pages/after-view-init-page/after-view-init-page.component';
import { AfterContentInitPageComponent } from './pages/after-content-init-page/after-content-init-page.component';
import { LifecycleHooksPageComponent } from './pages/lifecycle-hooks-page/lifecycle-hooks-page.component';

const routes: Routes = [
  {
    path: '',
    component: LifecycleHooksPageComponent,
    children: [
      { path: 'after-view-init', component: AfterViewInitPageComponent },
      { path: 'after-content-init', component: AfterContentInitPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifecycleHooksRoutingModule {}
