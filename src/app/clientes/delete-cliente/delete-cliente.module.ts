import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteClientePageRoutingModule } from './delete-cliente-routing.module';

import { DeleteClientePage } from './delete-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteClientePageRoutingModule
  ],
  declarations: [DeleteClientePage]
})
export class DeleteClientePageModule {}
