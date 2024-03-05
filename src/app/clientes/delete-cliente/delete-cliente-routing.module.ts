import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteClientePage } from './delete-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteClientePageRoutingModule {}
