import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteFotografosPage } from './delete-fotografos.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteFotografosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteFotografosPageRoutingModule {}
