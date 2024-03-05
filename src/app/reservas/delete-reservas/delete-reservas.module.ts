import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteReservasPageRoutingModule } from './delete-reservas-routing.module';

import { DeleteReservasPage } from './delete-reservas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteReservasPageRoutingModule
  ],
  declarations: [DeleteReservasPage]
})
export class DeleteReservasPageModule {}
