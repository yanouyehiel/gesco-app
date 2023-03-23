import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageTeacherPageRoutingModule } from './message-teacher-routing.module';

import { MessageTeacherPage } from './message-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageTeacherPageRoutingModule
  ],
  declarations: [MessageTeacherPage]
})
export class MessageTeacherPageModule {}
