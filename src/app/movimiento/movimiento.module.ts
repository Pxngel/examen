import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MovimientoRoutingModule } from './movimiento-routing.module';
import { MovimientoComponent } from './movimiento.component';

import {MatTableModule} from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';
import { FiltroBusquedaPipe } from './filtro-busqueda.pipe';
@NgModule({
  declarations: [
    MovimientoComponent,
    FiltroBusquedaPipe
  ],
  imports: [
    CommonModule,
    MovimientoRoutingModule,
    FormsModule,
    MatTableModule,SharedModule
  ],
  providers:[FiltroBusquedaPipe]
})
export class MovimientoModule { }
