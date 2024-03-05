import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSolicitudesPageRoutingModule } from './detail-solicitudes-routing.module';

import { DetailSolicitudesPage } from './detail-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSolicitudesPageRoutingModule
  ],
  declarations: [DetailSolicitudesPage]
})
export class DetailSolicitudesPageModule {}
