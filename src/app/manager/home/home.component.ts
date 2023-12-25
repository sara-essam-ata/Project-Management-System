import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chart: any = [];
  userCount:any;

  userName = localStorage.getItem('userName');
  tasksCount = localStorage.getItem('TasksCount')
  projectsCount = localStorage.getItem('projectsCount')

  constructor(private _helperService:HelperService) { }

  ngOnInit(): void {
    this.grtTaskCount()
  }

  grtTaskCount(){
    this._helperService.getTaskCount().subscribe({
      next: (res)=>{
        console.log(res);
        this.userCount = res;
        // console.log(this.taskCount?.toDo, this.taskCount?.inProgress, this.taskCount?.done);
   
      }, error: (err)=>{
        console.log(err);
        
      }, complete: ()=>{
        this.chart = new Chart('canvas', {
          type: 'doughnut',
          data: {
            labels: [
              'To Do',
              'In Progress',
              'Done'
            ],
            datasets: [{
              label: 'My First Dataset',
              data: [this.userCount?.toDo, this.userCount?.inProgress, this.userCount?.done],
              backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            }]
          }
        })
      }
    })
  }


}
