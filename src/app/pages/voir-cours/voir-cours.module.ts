import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirCoursPageRoutingModule } from './voir-cours-routing.module';

import { VoirCoursPage } from './voir-cours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirCoursPageRoutingModule
  ],
  declarations: [VoirCoursPage]
})
export class VoirCoursPageModule {}
