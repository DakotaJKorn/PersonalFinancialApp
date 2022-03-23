import { Component, Input, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { AppCommunicationService } from 'src/app/services/app communication/app-communication.service';

@Component({
  selector: 'condor-pie-graph',
  templateUrl: './pie-graph.component.html',
  styleUrls: ['./pie-graph.component.scss']
})
export class PieGraphComponent implements OnInit {

  @Input() accounts!: number;
  @Input() portfolio!: number;

  chart!: Chart;
  
  chartLabels: any = ['Accounts', 'Portfolio'];
  chartData: any = [1,1];
  
  data = {
    labels: this.chartLabels,
    datasets: [{
      label: 'My First Dataset',
      data: this.chartData,
      backgroundColor: ['#BB4E03', '#D78347'],
      hoverOffset: 3
    }]
  };

  constructor(private appCommunicationService: AppCommunicationService){
    this.appCommunicationService.setPieGraph(this);
   }

  ngOnInit(): void {
   
  }

  createGraph(total:number,accounts:number,portfolio:number):void{
    this.data.datasets[0].data = [accounts, portfolio];
    console.log(this.chartData);
    this.chart = new Chart('pieChart', {type: 'doughnut', data: this.data})
  }

}
