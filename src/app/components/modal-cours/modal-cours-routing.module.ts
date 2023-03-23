import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCoursPage } from './modal-cours.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCoursPageRoutingModule {}
