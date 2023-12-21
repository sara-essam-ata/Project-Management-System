import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { IListProject } from 'src/app/Models/project';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit {

  listProjects: IListProject[] = [];
  constructor(
    private _ProjectsService:ProjectsService
  ) { }

  ngOnInit() {
    this.getMyProjects()
  }
  getMyProjects(){
    this._ProjectsService.onGetManagerProjects().subscribe({
      next:(res)=>{
        console.log(res);
        this.listProjects = res.data
      }
    })
  }

}
