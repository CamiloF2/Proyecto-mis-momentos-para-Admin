import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFotografoPageRoutingModule } from './add-fotografos-routing.module';

import { AddFotografoPage } from './add-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFotografoPageRoutingModule
  ],
  declarations: [AddFotografoPage]
})
export class AddFotografoPageModule {}
