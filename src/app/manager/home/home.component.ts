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
  tasksCount:any;
  usersCount:any;
  userName = localStorage.getItem('userName');
  projectsCount = localStorage.getItem('projectsCount')
  tasksNumber = localStorage.getItem('tasksNumber')

  constructor(private _helperService:HelperService) { }

  ngOnInit(): void {
    this.getTasksCount()    
    this.getUsersCount()
  }

  getTasksCount(){
    this._helperService.onGetTasksCount().subscribe({
      next: (res)=>{
        console.log(res);
        this.tasksCount = res;   
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
              data: [this.tasksCount?.toDo, this.tasksCount?.inProgress, this.tasksCount?.done],
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
  getUsersCount(){
    this._helperService.onGetUsresCount().subscribe({
      next: (res)=>{
        console.log(res);
        this.usersCount=res
        
      }, error: (err)=>{
        console.log(err);
        
      }, complete: ()=>{}
    })
  }

}
