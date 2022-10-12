import { Component } from '@angular/core';


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chart:ApexChart={
    type:'bar'
  }
  title= {
    text: "My First Angular Chart"
  };
  series:ApexAxisChartSeries = [
    {
      name: "My-series",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      
    }
  ]
}
