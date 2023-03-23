import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VoirNotePage } from './voir-note.page';

const routes: Routes = [
  {
    path: '',
    component: VoirNotePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoirNotePageRoutingModule {}
