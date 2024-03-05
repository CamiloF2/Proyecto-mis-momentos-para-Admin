import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFotografoPage } from './add-fotografos.page';

const routes: Routes = [
  {
    path: '',
    component: AddFotografoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFotografoPageRoutingModule {}
