import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalAbsencePage } from './modal-absence.page';

const routes: Routes = [
  {
    path: '',
    component: ModalAbsencePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalAbsencePageRoutingModule {}
