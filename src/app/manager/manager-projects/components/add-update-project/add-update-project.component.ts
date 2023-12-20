import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectsService } from '../../services/projects.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-update-project',
  templateUrl: './add-update-project.component.html',
  styleUrls: ['./add-update-project.component.scss']
})
export class AddUpdateProjectComponent implements OnInit {
projectForm=new FormGroup({
  title:new FormControl(null),
  description:new FormControl(null),
})
  constructor(private _ProjectsService:ProjectsService,private tostar:ToastrService,private router:Router) { }
onSubmit(data:FormGroup){
  console.log(data.value);
  this._ProjectsService.onAddProject(data.value).subscribe({
    next:(res)=>{
      console.log(res);
      
    },error:(err)=>{
      this.tostar.error(err.error.message,'Error');
    },complete:()=>{
      this.router.navigate(['dashboard/manager/projects'])
    }
  })

  
}
  ngOnInit() {
  }

}
