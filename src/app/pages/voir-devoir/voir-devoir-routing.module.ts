import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirDevoirPage } from './voir-devoir.page';

const routes: Routes = [
  {
    path: '',
    component: VoirDevoirPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirDevoirPageRoutingModule {}
