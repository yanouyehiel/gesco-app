import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionCoursPage } from './gestion-cours.page';

const routes: Routes = [
  {
    path: '',
    component: GestionCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionCoursPageRoutingModule {}
