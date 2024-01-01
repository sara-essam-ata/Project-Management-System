import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, TrackByFunction } from '@angular/core';
import { EmployeeTaskService } from './services/employee-task.service';
import { ITaskData } from '../models/employee';
import {
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-Employee-tasks',
  templateUrl: './Employee-tasks.component.html',
  styleUrls: ['./Employee-tasks.component.scss'],
  
})
export class EmployeeTasksComponent implements OnInit {
  todo:any[]=[];
  done:any[]= [];
  inprogress:any[]= [];
  
  constructor(
    private _EmployeeTaskService:EmployeeTaskService
  ){}
  ngOnInit() {
    this.getAllMyTasks()
  }

  getAllMyTasks(){
    let parms = {
      pageSize:100,
      pageNumber: 1,
    }
    this._EmployeeTaskService.onGetAllMyTasks(parms).subscribe({
      next:(res)=>{
        for(let task of res.data){
          if(task.status== 'ToDo'){
            this.todo.push(task)
          }else if(task.status== 'InProgress'){
            this.inprogress.push(task)
          }else{
            this.done.push(task)
          }
        }
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {    
    const draggedItemId = event.item.data;
    this._EmployeeTaskService.onChangeStatus(draggedItemId,event.container.id).subscribe({
      next:(res)=>{
      }
    })
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  
})
