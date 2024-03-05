import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSolicitudesPage } from './list-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: ListSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSolicitudesPageRoutingModule {}
