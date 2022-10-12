import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccionesRoutingModule } from './acciones-routing.module';
import { AccionesComponent } from './acciones.component';
import { NgApexchartsModule } from 'ng-apexcharts';


@NgModule({
  declarations: [
    AccionesComponent
  ],
  imports: [
    CommonModule,
    AccionesRoutingModule,
    NgApexchartsModule
  ]
})
export class AccionesModule { }
