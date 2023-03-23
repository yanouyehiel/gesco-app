import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalDevoirPageRoutingModule } from './modal-devoir-routing.module';

import { ModalDevoirPage } from './modal-devoir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalDevoirPageRoutingModule
  ],
  declarations: [ModalDevoirPage]
})
export class ModalDevoirPageModule {}
