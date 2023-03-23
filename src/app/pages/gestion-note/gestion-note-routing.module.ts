import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionNotePage } from './gestion-note.page';

const routes: Routes = [
  {
    path: '',
    component: GestionNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionNotePageRoutingModule {}
