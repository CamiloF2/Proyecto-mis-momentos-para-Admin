import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuReservasPageRoutingModule } from './menu-reservas-routing.module';

import { MenuReservasPage } from './menu-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuReservasPageRoutingModule
  ],
  declarations: [MenuReservasPage]
})
export class MenuReservasPageModule {}
