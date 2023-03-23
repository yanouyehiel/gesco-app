import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionDevoirPageRoutingModule } from './gestion-devoir-routing.module';

import { GestionDevoirPage } from './gestion-devoir.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionDevoirPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [GestionDevoirPage]
})
export class GestionDevoirPageModule {}
