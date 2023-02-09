import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content-projection',
    loadChildren: () =>
      import('./content-projection/content-projection.module').then(
        (m) => m.ContentProjectionModule
      ),
  },
  {
    path: 'lifecycle-hooks',
    loadChildren: () =>
      import('./lifecycle-hooks/lifecycle-hooks.module').then(
        (m) => m.LifecycleHooksModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
