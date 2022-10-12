import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValorComponent } from './valor.component';

const routes: Routes = [
  {  path:'', component:ValorComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValorRoutingModule { }
