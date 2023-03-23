import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionCoursPageRoutingModule } from './gestion-cours-routing.module';

import { GestionCoursPage } from './gestion-cours.page';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionCoursPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [GestionCoursPage]
})
export class GestionCoursPageModule {}
