import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListFotografosPageRoutingModule } from './list-fotografos-routing.module';

import { ListFotografoPage } from './list-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListFotografosPageRoutingModule
  ],
  declarations: [ListFotografoPage]
})
export class ListFotografosPageModule {}
