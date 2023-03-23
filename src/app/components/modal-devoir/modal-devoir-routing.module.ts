import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalDevoirPage } from './modal-devoir.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDevoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalDevoirPageRoutingModule {}
