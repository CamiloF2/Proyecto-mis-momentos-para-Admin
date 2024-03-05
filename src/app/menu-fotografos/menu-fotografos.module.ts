import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuFotografosPageRoutingModule } from './menu-fotografos-routing.module';

import { MenuFotografosPage } from './menu-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuFotografosPageRoutingModule
  ],
  declarations: [MenuFotografosPage]
})
export class MenuFotografosPageModule {}
