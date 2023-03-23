import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileParentPage } from './profile-parent.page';

const routes: Routes = [
  {
    path: '',
    component: ProfileParentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileParentPageRoutingModule {}
