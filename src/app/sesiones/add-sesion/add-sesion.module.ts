import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSesionPageRoutingModule } from './add-sesion-routing.module';

import { AddSesionPage } from './add-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSesionPageRoutingModule
  ],
  declarations: [AddSesionPage]
})
export class AddSesionPageModule {}
