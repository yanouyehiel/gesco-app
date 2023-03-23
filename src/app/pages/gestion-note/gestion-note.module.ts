import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionNotePageRoutingModule } from './gestion-note-routing.module';

import { GestionNotePage } from './gestion-note.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionNotePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [GestionNotePage]
})
export class GestionNotePageModule {}
