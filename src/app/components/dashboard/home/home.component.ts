import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  public lineChartData: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
    { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
  ];
  public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // random color
      backgroundColor: this.getRandomRgba(),
      borderColor: this.getRandomRgba(),
      pointBackgroundColor: this.getRandomRgba(),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.getRandomRgba()
    },
    { // random color
      backgroundColor: this.getRandomRgba(),
      borderColor: this.getRandomRgba(),
      pointBackgroundColor: this.getRandomRgba(),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.getRandomRgba()
    },
    { // random color
      backgroundColor: this.getRandomRgba(),
      borderColor: this.getRandomRgba(),
      pointBackgroundColor: this.getRandomRgba(),
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: this.getRandomRgba()
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public dChart = [];
  public dChartData: Array<any>;
  public dChartLabels: Array<string>;

  constructor(private dataService: DataService) {
    this.dChartData = new Array<any>();
    this.dChartLabels = new Array<string>();
  }

  ngOnInit() {
    this.doughnutChart();
  }

  doughnutChart() {
    this.dataService.getTodos().subscribe((response) => {
      let data = response.json();
      let remaining = data.filter((d) => {
        if (!d.completed) {
          return d;
        }
      });
      this.dChartData.push(remaining.length)
      this.dChartLabels.push("Remaining Todos")
      let completed = data.filter((d) => {
        if (d.completed) {
          return d;
        }
      });
      this.dChartData.push(completed.length);
      this.dChartLabels.push("Completed Todos")
      this.dChart = new Chart('todo', {
        type: 'doughnut',
        data: {
          datasets: [{
            data: this.dChartData,
            backgroundColor: ['#aa4b66', '#2671a6']
          }],
          labels: this.dChartLabels
        }
      })
    })
  }

  lineChart() {

  }

  getRandomRgba() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    var a = Math.random().toFixed(1);
    return 'rgba(' + r + ', ' + g + ', ' + b + ',' + 0.7 + ')';
}

}
