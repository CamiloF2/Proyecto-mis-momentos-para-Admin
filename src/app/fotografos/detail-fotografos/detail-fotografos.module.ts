import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailFotografosPageRoutingModule } from './detail-fotografos-routing.module';

import { DetailFotografosPage } from './detail-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailFotografosPageRoutingModule
  ],
  declarations: [DetailFotografosPage]
})
export class DetailFotografosPageModule {}
