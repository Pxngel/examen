import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ValorRoutingModule } from './valor-routing.module';
import { ValorComponent } from './valor.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ValorComponent
  ],
  imports: [
    CommonModule,
    ValorRoutingModule,
    NgApexchartsModule,
    MatButtonModule
  ]
})
export class ValorModule { }
