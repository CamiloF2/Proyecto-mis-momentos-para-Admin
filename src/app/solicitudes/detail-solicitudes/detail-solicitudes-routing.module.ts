import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailSolicitudesPage } from './detail-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: DetailSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailSolicitudesPageRoutingModule {}
