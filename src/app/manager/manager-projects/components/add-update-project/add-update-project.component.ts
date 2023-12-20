import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-add-update-project',
  templateUrl: './add-update-project.component.html',
  styleUrls: ['./add-update-project.component.scss']
})
export class AddUpdateProjectComponent implements OnInit {

  constructor(private _ProjectsService:ProjectsService,
    private _toastr:ToastrService,
    private _Router:Router) { }

  getProjectById(id: number){
    this._ProjectsService.onProjectById(id).subscribe({
      next: (res)=> {
        
      }, error: (err)=>{

      }, complete: ()=>{
        
      }
    })
  }

  ngOnInit() {
  }

}
