import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalNotePage } from './modal-note.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalNotePageRoutingModule {}
