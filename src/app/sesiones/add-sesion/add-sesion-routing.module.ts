import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSesionPage } from './add-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: AddSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSesionPageRoutingModule {}
