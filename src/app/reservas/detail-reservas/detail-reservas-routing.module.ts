import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailReservasPage } from './detail-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: DetailReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailReservasPageRoutingModule {}
