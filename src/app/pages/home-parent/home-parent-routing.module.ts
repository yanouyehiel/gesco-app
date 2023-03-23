import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeParentPage } from './home-parent.page';

const routes: Routes = [
  {
    path: '',
    component: HomeParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeParentPageRoutingModule {}
