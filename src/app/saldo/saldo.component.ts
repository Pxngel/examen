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
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {



  constructor(private api:ApiService) {

  }
  generation1 = [];
  generation2 = [];
  generation3 = [];
  generation4 = [];
  generation5 = [];
  generation6 = [];
  generation7 = [];
  generation8 = [];

 ngOnInit(): void {

   this.api.getType('1').subscribe(res => {
     this.generation1=res.moves
     console.log(this.generation1);
   })
   this.api.getType('2').subscribe(res => {
     this.generation2=res.moves
     console.log(this.generation2);
   })
   this.api.getType('3').subscribe(res => {
     this.generation3=res.moves
     console.log(this.generation3);
   })
   this.api.getType('4').subscribe(res => {
     this.generation4=res.moves
     console.log(this.generation4);
   })
   this.api.getType('5').subscribe(res => {
     this.generation5=res.moves
     console.log(this.generation5);
   })
   this.api.getType('6').subscribe(res => {
     this.generation6=res.moves
     console.log(this.generation6);
   })
   this.api.getType('7').subscribe(res => {
     this.generation7=res.moves
     console.log(this.generation7);
   })
   this.api.getType('8').subscribe(res => {
     this.generation8=res.moves
     console.log(this.generation8);
   })
setTimeout(() => {
 this.series =  [
  {
    name: 'Generation 1',
    data: [this.generation1.length,this.generation1.length,this.generation1.length,this.generation1.length,this.generation1.length,this.generation1.length,this.generation1.length,this.generation1.length,]
  },
   {
     name: "Generations",
     data: [this.generation1.length,this.generation2.length,this.generation3.length,this.generation4.length,this.generation5.length,this.generation6.length,this.generation7.length,this.generation8.length],

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
}
