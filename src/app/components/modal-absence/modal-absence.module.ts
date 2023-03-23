import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalAbsencePageRoutingModule } from './modal-absence-routing.module';

import { ModalAbsencePage } from './modal-absence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalAbsencePageRoutingModule
  ],
  declarations: [ModalAbsencePage]
})
export class ModalAbsencePageModule {}
