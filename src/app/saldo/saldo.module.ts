import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaldoRoutingModule } from './saldo-routing.module';
import { SaldoComponent } from './saldo.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    SaldoComponent
  ],
  imports: [
    CommonModule,
    SaldoRoutingModule,
    NgApexchartsModule
  ]
})
export class SaldoModule { }
