import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirAbsencePageRoutingModule } from './voir-absence-routing.module';

import { VoirAbsencePage } from './voir-absence.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirAbsencePageRoutingModule
  ],
  declarations: [VoirAbsencePage]
})
export class VoirAbsencePageModule {}
