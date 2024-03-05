import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteSolicitudesPageRoutingModule } from './delete-solicitudes-routing.module';

import { DeleteSolicitudesPage } from './delete-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteSolicitudesPageRoutingModule
  ],
  declarations: [DeleteSolicitudesPage]
})
export class DeleteSolicitudesPageModule {}
