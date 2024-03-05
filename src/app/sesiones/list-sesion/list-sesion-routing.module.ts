import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSesionPage } from './list-sesion.page';

const routes: Routes = [
  {
    path: '',
    component: ListSesionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSesionPageRoutingModule {}
