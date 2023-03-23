import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionAbsencePageRoutingModule } from './gestion-absence-routing.module';

import { GestionAbsencePage } from './gestion-absence.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionAbsencePageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [GestionAbsencePage]
})
export class GestionAbsencePageModule {}
