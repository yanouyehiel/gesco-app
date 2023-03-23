import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoirDevoirPageRoutingModule } from './voir-devoir-routing.module';

import { VoirDevoirPage } from './voir-devoir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoirDevoirPageRoutingModule
  ],
  declarations: [VoirDevoirPage]
})
export class VoirDevoirPageModule {}
