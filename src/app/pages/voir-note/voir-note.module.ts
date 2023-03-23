import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirNotePageRoutingModule } from './voir-note-routing.module';

import { VoirNotePage } from './voir-note.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirNotePageRoutingModule
  ],
  declarations: [VoirNotePage]
})
export class VoirNotePageModule {}
