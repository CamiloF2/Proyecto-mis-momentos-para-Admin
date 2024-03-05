import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuReservasPage } from './menu-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: MenuReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuReservasPageRoutingModule {}
