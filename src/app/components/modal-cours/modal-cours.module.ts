import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCoursPageRoutingModule } from './modal-cours-routing.module';

import { ModalCoursPage } from './modal-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalCoursPageRoutingModule
  ],
  declarations: [ModalCoursPage]
})
export class ModalCoursPageModule {}
