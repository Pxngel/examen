import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'accion',
    loadChildren: () => import('./acciones/acciones.module').then( m => m.AccionesModule)
  },
  {
    path: 'movimiento',
    loadChildren: () => import('./movimiento/movimiento.module').then( m => m.MovimientoModule)
  },
  {
    path: 'saldo',
    loadChildren: () => import('./saldo/saldo.module').then( m => m.SaldoModule)
  },
  {
    path: 'valor',
    loadChildren: () => import('./valor/valor.module').then( m => m.ValorModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
