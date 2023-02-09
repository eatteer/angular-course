import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionPageComponent } from './pages/content-projection-page/content-projection-page.component';

const routes: Routes = [
  { path: '', component: ContentProjectionPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContentProjectionRoutingModule {}
