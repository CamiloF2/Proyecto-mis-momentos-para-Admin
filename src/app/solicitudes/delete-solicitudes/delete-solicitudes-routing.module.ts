import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteSolicitudesPage } from './delete-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteSolicitudesPageRoutingModule {}
