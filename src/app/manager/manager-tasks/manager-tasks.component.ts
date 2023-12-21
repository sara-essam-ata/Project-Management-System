import { Component, OnInit } from '@angular/core';
import { IListTasks } from 'src/app/Models/project';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-manager-tasks',
  templateUrl: './manager-tasks.component.html',
  styleUrls: ['./manager-tasks.component.scss']
})
export class ManagerTasksComponent implements OnInit {

  listTasks: IListTasks[] = [];
  constructor(private _TaskService:TaskService) { }

  ngOnInit() {
    this.getAllTasks()
  }
  getAllTasks(){
    this._TaskService.onGetManagerTasks().subscribe({
      next:(res)=>{
        console.log(res);
        this.listTasks = res.data
      }
    })
  }

}
