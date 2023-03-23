import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageTeacherPage } from './message-teacher.page';

const routes: Routes = [
  {
    path: '',
    component: MessageTeacherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MessageTeacherPageRoutingModule {}
