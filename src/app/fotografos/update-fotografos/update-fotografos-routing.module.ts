import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFotografosPage } from './update-fotografos.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFotografosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFotografosPageRoutingModule {}
