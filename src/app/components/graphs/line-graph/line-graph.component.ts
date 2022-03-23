import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'condor-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  chart!: Chart;
  stockLabels: any = ['a', 'b', 'c'];
  stockData: any = [1,2,3];
  label: string = 'test chart';

  constructor() { }

  ngOnInit(): void {
    this.createChart("test");
  }

  createChart(name:string){
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: this.stockLabels,
        datasets: [{
          label: this.label,
          data: this.stockData,
          borderWidth: 3,
          fill: false,
          backgroundColor: 'rgba(93, 175, 89, 0.1)',
          borderColor: '#4ACD40',
          tension: .7
        }]
      }
    })
  }

}
