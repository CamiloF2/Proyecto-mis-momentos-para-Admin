import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'list-cliente',
    loadChildren: () => import('./clientes/list-cliente/list-cliente.module').then( m => m.ListClientePageModule)
  },
  {
    path: 'add-cliente',
    loadChildren: () => import('./clientes/add-cliente/add-cliente.module').then( m => m.AddClientePageModule)
  },
  {
    path: 'update-cliente/:id',
    loadChildren: () => import('./clientes/update-cliente/update-cliente.module').then( m => m.UpdateClientePageModule)
  },
  {
    path: 'detail-cliente/:id',
    loadChildren: () => import('./clientes/detail-cliente/detail-cliente.module').then( m => m.DetailClientePageModule)
  },
  {
    path: 'delete-cliente/:id',
    loadChildren: () => import('./clientes/delete-cliente/delete-cliente.module').then( m => m.DeleteClientePageModule)
  },
  {
    path: 'menu-clientes',
    loadChildren: () => import('./menu-clientes/menu-clientes.module').then( m => m.MenuClientesPageModule)
  },
  {
    path: 'menu-sesiones',
    loadChildren: () => import('./menu-sesiones/menu-sesiones.module').then( m => m.MenuSesionesPageModule)
  },
  {
    path: 'add-sesion',
    loadChildren: () => import('./sesiones/add-sesion/add-sesion.module').then( m => m.AddSesionPageModule)
  },
  {
    path: 'delete-sesion/:id',
    loadChildren: () => import('./sesiones/delete-sesion/delete-sesion.module').then( m => m.DeleteSesionPageModule)
  },
  {
    path: 'detail-sesion/:id',
    loadChildren: () => import('./sesiones/detail-sesion/detail-sesion.module').then( m => m.DetailSesionPageModule)
  },
  {
    path: 'list-sesion',
    loadChildren: () => import('./sesiones/list-sesion/list-sesion.module').then( m => m.ListSesionPageModule)
  },
  {
    path: 'update-sesion/:id',
    loadChildren: () => import('./sesiones/update-sesion/update-sesion.module').then( m => m.UpdateSesionPageModule)
  },
  {
    path: 'menu-fotografos',
    loadChildren: () => import('./menu-fotografos/menu-fotografos.module').then( m => m.MenuFotografosPageModule)
  },
  {
    path: 'add-fotografos',
    loadChildren: () => import('./fotografos/add-fotografos/add-fotografos.module').then( m => m.AddFotografoPageModule)
  },
  {
    path: 'delete-fotografos/:id',
    loadChildren: () => import('./fotografos/delete-fotografos/delete-fotografos.module').then( m => m.DeleteFotografosPageModule)
  },
  {
    path: 'detail-fotografos/:id',
    loadChildren: () => import('./fotografos/detail-fotografos/detail-fotografos.module').then( m => m.DetailFotografosPageModule)
  },
  {
    path: 'list-fotografos',
    loadChildren: () => import('./fotografos/list-fotografos/list-fotografos.module').then( m => m.ListFotografosPageModule)
  },
  {
    path: 'update-fotografos/:id',
    loadChildren: () => import('./fotografos/update-fotografos/update-fotografos.module').then( m => m.UpdateFotografosPageModule)
  },
  {
    path: 'delete-reservas/:id',
    loadChildren: () => import('./reservas/delete-reservas/delete-reservas.module').then( m => m.DeleteReservasPageModule)
  },
  {
    path: 'detail-reservas/:id',
    loadChildren: () => import('./reservas/detail-reservas/detail-reservas.module').then( m => m.DetailReservasPageModule)
  },
  {
    path: 'list-reservas',
    loadChildren: () => import('./reservas/list-reservas/list-reservas.module').then( m => m.ListReservasPageModule)
  },
  {
    path: 'delete-solicitudes',
    loadChildren: () => import('./solicitudes/delete-solicitudes/delete-solicitudes.module').then( m => m.DeleteSolicitudesPageModule)
  },
  {
    path: 'detail-solicitudes',
    loadChildren: () => import('./solicitudes/detail-solicitudes/detail-solicitudes.module').then( m => m.DetailSolicitudesPageModule)
  },
  {
    path: 'list-solicitudes',
    loadChildren: () => import('./solicitudes/list-solicitudes/list-solicitudes.module').then( m => m.ListSolicitudesPageModule)
  },
  {
    path: 'menu-reservas',
    loadChildren: () => import('./menu-reservas/menu-reservas.module').then( m => m.MenuReservasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
