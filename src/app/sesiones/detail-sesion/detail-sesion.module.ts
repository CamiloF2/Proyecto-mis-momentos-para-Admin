import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailSesionPageRoutingModule } from './detail-sesion-routing.module';

import { DetailSesionPage } from './detail-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailSesionPageRoutingModule
  ],
  declarations: [DetailSesionPage]
})
export class DetailSesionPageModule {}
