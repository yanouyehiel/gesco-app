import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfileParentPageRoutingModule } from './profile-parent-routing.module';

import { ProfileParentPage } from './profile-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileParentPageRoutingModule
  ],
  declarations: [ProfileParentPage]
})
export class ProfileParentPageModule {}
