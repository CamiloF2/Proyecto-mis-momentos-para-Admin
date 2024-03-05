import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailFotografosPage } from './detail-fotografos.page';

const routes: Routes = [
  {
    path: '',
    component: DetailFotografosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailFotografosPageRoutingModule {}
