import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionDevoirPage } from './gestion-devoir.page';

const routes: Routes = [
  {
    path: '',
    component: GestionDevoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionDevoirPageRoutingModule {}
