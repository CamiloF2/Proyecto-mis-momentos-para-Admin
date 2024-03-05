import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuSesionesPageRoutingModule } from './menu-sesiones-routing.module';

import { MenuSesionesPage } from './menu-sesiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuSesionesPageRoutingModule
  ],
  declarations: [MenuSesionesPage]
})
export class MenuSesionesPageModule {}
