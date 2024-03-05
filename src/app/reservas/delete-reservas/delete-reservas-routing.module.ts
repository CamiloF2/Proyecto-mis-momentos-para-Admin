import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteReservasPage } from './delete-reservas.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteReservasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteReservasPageRoutingModule {}
