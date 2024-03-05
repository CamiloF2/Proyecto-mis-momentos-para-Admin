import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFotografoPage } from './list-fotografos.page';

const routes: Routes = [
  {
    path: '',
    component: ListFotografoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListFotografosPageRoutingModule {}
