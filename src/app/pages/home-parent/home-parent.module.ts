import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeParentPageRoutingModule } from './home-parent-routing.module';

import { HomeParentPage } from './home-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeParentPageRoutingModule
  ],
  declarations: [HomeParentPage]
})
export class HomeParentPageModule {}
