import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { Component, OnInit } from '@angular/core';
import { IListTasks, TableData } from 'src/app/Models/project';
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
   pageSize:Number=10;
   pageNumber:number=1;

  listTasks: IListTasks[] = [];
  constructor(private _TaskService:TaskService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,) { }

  ngOnInit() {
    this.getAllTasks()
  }
  getAllTasks(){
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,

    }
    this._TaskService.onGetManagerTasks(parms).subscribe({
      next:(res)=>{
        console.log(res);
        this.tableData=res;
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
  openDeleteDialog(listTasks: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: this.listTasks,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        console.log(result.id);
        this.onDeleteCategory(result.id);
      }
    });
  }
  onDeleteCategory(id: number) {
    this._TaskService.onDeleteTask(id).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err);
      }, complete: () => {
        this.toastr.success('Project Deleted Successfully', 'Ok');
        this.getAllTasks()
      }
    })
  }



}
