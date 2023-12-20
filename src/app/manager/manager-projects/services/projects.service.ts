import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  IProject } from 'src/app/Models/project';

@Injectable({
    providedIn: 'root'
  })
export class ProjectsService {

    constructor(
        private _HttpClient:HttpClient
    ) { }

    onGetManagerProjects():Observable<any>{
        return this._HttpClient.get('Project/manager')
    }

    onAddProject(data:IProject):Observable<any>{
        return this._HttpClient.post('Project',data)
    }
}
