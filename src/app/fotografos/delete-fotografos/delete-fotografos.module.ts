import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteFotografosPageRoutingModule } from './delete-fotografos-routing.module';

import { DeleteFotografosPage } from './delete-fotografos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteFotografosPageRoutingModule
  ],
  declarations: [DeleteFotografosPage]
})
export class DeleteFotografosPageModule {}
