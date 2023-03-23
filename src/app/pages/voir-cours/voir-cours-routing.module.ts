import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirCoursPage } from './voir-cours.page';

const routes: Routes = [
  {
    path: '',
    component: VoirCoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirCoursPageRoutingModule {}
