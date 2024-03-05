import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateSesionPageRoutingModule } from './update-sesion-routing.module';

import { UpdateSesionPage } from './update-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateSesionPageRoutingModule
  ],
  declarations: [UpdateSesionPage]
})
export class UpdateSesionPageModule {}
