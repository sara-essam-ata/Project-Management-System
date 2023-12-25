import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { HelperService } from 'src/app/services/helper.service';
import { ProjectsService } from 'src/app/manager/manager-projects/services/projects.service';
import { Employee, IListProject, IProject } from 'src/app/Models/project';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


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
  isViewMode: boolean = true;
  isEditMode: boolean = true;
  isAddMode: boolean = true;
  taskId:any;
  taskData:any;
  employee:Employee|undefined;
  project:IProject|undefined;
  constructor(private _TaskService:TaskService,
    private _HelperService:HelperService,
    private _ProjectsService:ProjectsService,
    private router:Router,
    private ActivatedRoute:ActivatedRoute,
    private toastr:ToastrService
    ) {
       this.taskId = ActivatedRoute.snapshot.params['id']
       if(this.taskId){
        this.getTaskById(this.taskId);
        this.isAddMode=false;
        ActivatedRoute.url.subscribe(url=>{
          this.isViewMode = url.some(segment=> segment.path==='view')
          this.disableFormControls()
        })
        ActivatedRoute.url.subscribe(url=>{
          this.isEditMode = url.some(segment=> segment.path==='edit')
          this.enableFormControls()
        })
       }
       else{
        this.isAddMode=true;
        this.isEditMode=false;
        this.isViewMode=false
       }
     }

  disableFormControls(){
    if(this.isViewMode){
      this.taskForm.get('title')?.disable();
      this.taskForm.get('description')?.disable();
      this.taskForm.get('employeeId')?.disable();
      this.taskForm.get('projectId')?.disable();
    }
    
  }   
  enableFormControls(){
    if(this.isEditMode){
      this.taskForm.get('title')?.enable();
      this.taskForm.get('description')?.enable();
      this.taskForm.get('employeeId')?.enable();
      this.taskForm.get('projectId')?.enable();
    }
    
  }   

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
    if(this.taskId){
      this._TaskService.onEditTask(this.taskId,data.value).subscribe({
        next:(res)=>{

        },error:(err)=>{
          this.toastr.error('error on update task')
        },
        complete:()=>{
          this.router.navigate(['/dashboard/manager/tasks']);
          this.toastr.success('task updated successfully')
        }
      })
    }
    else{
      this._TaskService.onAddTask(data.value).subscribe({
      next:(res)=>{
        console.log(res);        
        
      },error:(err)=>{
        this.toastr.error('error on adding task')
      },
      complete:()=>{
        this.router.navigate(['/dashboard/manager/tasks']);
        this.toastr.success('task added successfully')
      }
    })
    }
    
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

  getTaskById(id:number){
    this._TaskService.ongetTaskbyId(id).subscribe({
      next:(res)=>{
        console.log(res);
        this.taskData=res        
      },error:(err)=>{
        console.log('error');
        
      },complete:()=>{
        this.taskForm.patchValue({
          title: this.taskData.title,
          description: this.taskData.description,
          employeeId: this.taskData.employee.id,
          projectId: this.taskData.project.id,
        })
      }
    })
  }

}
