import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MessageParentPageRoutingModule } from './message-parent-routing.module';

import { MessageParentPage } from './message-parent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageParentPageRoutingModule
  ],
  declarations: [MessageParentPage]
})
export class MessageParentPageModule {}
