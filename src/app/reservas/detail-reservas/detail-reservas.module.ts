import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailReservasPageRoutingModule } from './detail-reservas-routing.module';

import { DetailReservasPage } from './detail-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailReservasPageRoutingModule
  ],
  declarations: [DetailReservasPage]
})
export class DetailReservasPageModule {}
