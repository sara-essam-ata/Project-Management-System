import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { Component, OnInit } from '@angular/core';
import { IListTasks, ITask, TableData } from 'src/app/Models/project';
import { TaskService } from './services/task.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-manager-tasks',
  templateUrl: './manager-tasks.component.html',
  styleUrls: ['./manager-tasks.component.scss']
})
export class ManagerTasksComponent implements OnInit {
   tableData:TableData|any;
   pageSize:number=10;
   pageNumber:number=1;
   searchValue:string='';
   statusID:number =0;
   statusData=['All','ToDo','InProgress','Done']
  listTasks: IListTasks[] = [];
  constructor(private _TaskService:TaskService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit() {
    this.getAllTasks()
  }
  
  getAllTasks(){
    let parms = {}
    parms ={
      pageNumber:this.pageNumber,
      pageSize:this.pageNumber,
      status:this.searchValue

  }
     if(this.statusID==1){
      parms ={
        pageNumber:this.pageNumber,
        pageSize:this.pageSize,
        status: this.statusData[1]
      }
      console.log(this.statusData[1])
    }else if(this.statusID==2){
      parms ={
        pageNumber:this.pageNumber,
        pageSize:this.pageSize,
        status: this.statusData[2]
    }
    }else if(this.statusID==3){
      parms ={
        pageNumber:this.pageNumber,
        pageSize:this.pageSize,
        status: this.statusData[3]
    }
    }
    else{
      parms ={
        pageNumber:this.pageNumber,
        pageSize:this.pageSize,
        status:this.searchValue
    }
  }
    this._TaskService.onGetManagerTasks(parms).subscribe({
      next:(res)=>{
        console.log(res);
        this.tableData=res;
        console.log(this.searchValue);
        this.listTasks = this.tableData.data;
      }
    })
  }
  handlePageEvent(e:PageEvent){
    console.log(e);
      this.pageSize = e.pageSize;
      this.pageNumber=e.pageIndex;  
      this.getAllTasks();
  }

    // Delete
  openDeleteDialog(data: ITask): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: data,
      width: '35%',      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        console.log(result.id);
        this.deleteTask(result.id);
      }
    });
  }
  deleteTask(id: number) {
    this._TaskService.onDeleteTask(id).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        this.toastr.error('error')
      }, complete: () => {
        this.toastr.success('Project Deleted Successfully');
        this.getAllTasks()
      }
    })
  }


}
