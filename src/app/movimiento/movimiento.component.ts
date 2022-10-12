import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-movimiento',
  templateUrl: './movimiento.component.html',
  styleUrls: ['./movimiento.component.css']
})
export class MovimientoComponent implements OnInit {

  search=null
  constructor(private api:ApiService) {

  }
  generation1:any = [];

 ngOnInit(): void {

   this.api.getType('1').subscribe((res:any) => {
     this.generation1=res.moves
     console.log(this.generation1);
   })
  }

}
