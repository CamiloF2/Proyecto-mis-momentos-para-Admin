import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSesionPageRoutingModule } from './list-sesion-routing.module';

import { ListSesionPage } from './list-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSesionPageRoutingModule
  ],
  declarations: [ListSesionPage]
})
export class ListSesionPageModule {}
