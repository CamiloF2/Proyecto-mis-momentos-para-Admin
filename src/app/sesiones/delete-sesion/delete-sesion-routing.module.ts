import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteSesionPage } from './delete-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteSesionPageRoutingModule {}
