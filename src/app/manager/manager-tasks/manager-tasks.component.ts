import { Component, OnInit } from '@angular/core';
import { IListTasks } from 'src/app/Models/project';
import { TaskService } from './services/task.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-tasks',
  templateUrl: './manager-tasks.component.html',
  styleUrls: ['./manager-tasks.component.scss']
})
export class ManagerTasksComponent implements OnInit {

  listTasks: IListTasks[] = [];
  constructor(private _TaskService:TaskService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,) { }

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

  //   // Delete
  // openDeleteDialog(listTasks: any): void {
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     data: this.listTasks,
  //     width: '40%',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     if (result) {
  //       console.log(result.id);
  //       this.onDeleteCategory(result.id);
  //     }
  //   });
  // }
  // onDeleteCategory(id: number) {
  //   this._TaskService.onDeleteTask(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }, error: (err) => {
  //       console.log(err);
  //     }, complete: () => {
  //       this.toastr.success('Project Deleted Successfully', 'Ok');
  //       this.getAllTasks()
  //     }
  //   })
  // }



}
