import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileTeacherPageRoutingModule } from './profile-teacher-routing.module';

import { ProfileTeacherPage } from './profile-teacher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileTeacherPageRoutingModule
  ],
  declarations: [ProfileTeacherPage]
})
export class ProfileTeacherPageModule {}
