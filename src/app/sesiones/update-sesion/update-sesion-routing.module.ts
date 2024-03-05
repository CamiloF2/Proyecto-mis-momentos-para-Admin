import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateSesionPage } from './update-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateSesionPageRoutingModule {}
