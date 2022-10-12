import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { FiltroBusquedaPipe } from '../movimiento/filtro-busqueda.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  providers:[FiltroBusquedaPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule { }
