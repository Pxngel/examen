import { Component, OnInit } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { ApiService } from '../shared/service/api.service';
@Component({
  selector: 'app-valor',
  templateUrl: './valor.component.html',
  styleUrls: ['./valor.component.css']
})
export class ValorComponent implements OnInit {


  constructor(private api:ApiService) {

  }
  generation1:any = [];
  generation2:any = [];
  generation3:any = [];
  generation4:any = [];
  generation5:any = [];
  generation6:any = [];
  generation7:any = [];
  generation8:any = [];

 ngOnInit(): void {

   this.api.getType('1').subscribe(res => {
     this.generation1=res
     console.log(res,"Asd");
   })
   this.api.getType('2').subscribe(res => {
     this.generation2=res
     console.log(this.generation2);
   })
   this.api.getType('3').subscribe(res => {
     this.generation3=res
     console.log(this.generation3);
   })
   this.api.getType('4').subscribe(res => {
     this.generation4=res
     console.log(this.generation4);
   })
   this.api.getType('5').subscribe(res => {
     this.generation5=res
     console.log(this.generation5);
   })
   this.api.getType('6').subscribe(res => {
     this.generation6=res
     console.log(this.generation6);
   })
   this.api.getType('7').subscribe(res => {
     this.generation7=res
     console.log(this.generation7);
   })
   this.api.getType('8').subscribe(res => {
     this.generation8=res
     console.log(this.generation8);
   })
setTimeout(() => {
 this.series =  [
   {
     name: "Generations",
     data: [this.generation1.moves.length,this.generation2.moves.length,this.generation3.moves.length,this.generation4.moves.length,this.generation5.moves.length,this.generation6.moves.length,this.generation7.moves.length,this.generation8.moves.length],

   }
 ]
}, 1000);
 }

 chart:ApexChart={
   type:'bar'
 }


 area:ApexChart={
   type:'area'
 }

 title= {
   text: "Pokemon Generations Moves"
 };
 series:ApexAxisChartSeries =[]
 xaxis:ApexXAxis= {
   categories: [
     "Gen 1",
     "Gen 2",
     "Gen 3",
     "Gen 4",
     "Gen 5",
     "Gen 6",
     "Gen 7",
     "Gen 8"
   ],
   position: "top",

   axisBorder: {
     show: false
   },
   axisTicks: {
     show: false
   },
   crosshairs: {
     fill: {
       type: "gradient",
       gradient: {
         colorFrom: "#D8E3F0",
         colorTo: "#BED1E6",
         stops: [0, 100],
         opacityFrom: 0.4,
         opacityTo: 0.5
       }
     }
   },
   tooltip: {
     enabled: true,
     offsetY: -35
   }
 }

 specie(){
  this.series =  [
    {
      name: "Generations",
      data: [this.generation1.pokemon_species.length,this.generation2.pokemon_species.length,this.generation3.pokemon_species.length,this.generation4.pokemon_species.length,this.generation5.pokemon_species.length,this.generation6.pokemon_species.length,this.generation7.pokemon_species.length,this.generation8.pokemon_species.length],

    }
  ]
 }
 Moves(){
  this.series =  [
    {
      name: "Generations",
      data: [this.generation1.moves.length,this.generation2.moves.length,this.generation3.moves.length,this.generation4.moves.length,this.generation5.moves.length,this.generation6.moves.length,this.generation7.moves.length,this.generation8.moves.length],

    }
  ]
 }

 types(){
  this.series =  [
    {
      name: "Generations",
      data: [this.generation1.types.length,this.generation2.types.length,this.generation3.types.length,this.generation4.types.length,this.generation5.types.length,this.generation6.types.length,this.generation7.types.length,this.generation8.types.length],

    }
  ]
 }

}
