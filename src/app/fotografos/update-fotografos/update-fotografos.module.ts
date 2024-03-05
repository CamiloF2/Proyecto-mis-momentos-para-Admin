import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFotografosPageRoutingModule } from './update-fotografos-routing.module';

import { UpdateFotografosPage } from './update-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFotografosPageRoutingModule
  ],
  declarations: [UpdateFotografosPage]
})
export class UpdateFotografosPageModule {}
