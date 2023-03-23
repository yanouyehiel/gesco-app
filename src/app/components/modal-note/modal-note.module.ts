import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalNotePageRoutingModule } from './modal-note-routing.module';

import { ModalNotePage } from './modal-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalNotePageRoutingModule
  ],
  declarations: [ModalNotePage]
})
export class ModalNotePageModule {}
