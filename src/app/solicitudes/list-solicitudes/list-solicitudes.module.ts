import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSolicitudesPageRoutingModule } from './list-solicitudes-routing.module';

import { ListSolicitudesPage } from './list-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSolicitudesPageRoutingModule
  ],
  declarations: [ListSolicitudesPage]
})
export class ListSolicitudesPageModule {}
