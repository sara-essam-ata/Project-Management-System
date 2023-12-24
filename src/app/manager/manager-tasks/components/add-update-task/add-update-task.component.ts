import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { HelperService } from 'src/app/services/helper.service';
import { ProjectsService } from 'src/app/manager/manager-projects/services/projects.service';
import { Employee, IListProject } from 'src/app/Models/project';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-update-task',
  templateUrl: './add-update-task.component.html',
  styleUrls: ['./add-update-task.component.scss']
})
export class AddUpdateTaskComponent implements OnInit {
  pageSize:Number=10;
  pageNumber:number=1;
  listProjects: IListProject[] = [];
  listUsers: Employee[] = [];
  constructor(private _TaskService:TaskService,
    private _HelperService:HelperService,
    private _ProjectsService:ProjectsService,
    private router:Router
    ) { }

  ngOnInit() {
    this.getAllUsers()
    this.getMyProjects()
  }
  taskForm = new FormGroup({
  title: new FormControl(null),
  description: new FormControl(null),
  employeeId: new FormControl(null),
  projectId: new FormControl(null),
  })
  onSubmit(data: FormGroup){
    this._TaskService.onAddTask(data.value).subscribe({
      next:(res)=>{
        console.log(res);        
        
      },error:(err)=>{

      },
      complete:()=>{
        this.router.navigate(['/dashboard/manager/tasks'])
      }
    })
  }
  getAllUsers(){
    this._HelperService.onGetUsers().subscribe({
      next:(res)=>{
        console.log(res);
        this.listUsers = res.data
        
      }
    })
  }
  getMyProjects(){
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,

    }
    this._ProjectsService.onGetManagerProjects(parms).subscribe({
      next:(res)=>{
        console.log(res);
        this.listProjects = res.data
      }
    })
  }

}
