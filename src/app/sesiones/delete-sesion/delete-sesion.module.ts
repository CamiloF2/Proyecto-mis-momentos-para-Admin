import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteSesionPageRoutingModule } from './delete-sesion-routing.module';

import { DeleteSesionPage } from './delete-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteSesionPageRoutingModule
  ],
  declarations: [DeleteSesionPage]
})
export class DeleteSesionPageModule {}
