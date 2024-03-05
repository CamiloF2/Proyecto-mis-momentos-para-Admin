import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuSesionesPage } from './menu-sesiones.page';

const routes: Routes = [
  {
    path: '',
    component: MenuSesionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuSesionesPageRoutingModule {}
