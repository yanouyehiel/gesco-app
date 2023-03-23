import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionAbsencePage } from './gestion-absence.page';

const routes: Routes = [
  {
    path: '',
    component: GestionAbsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionAbsencePageRoutingModule {}
