import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

    onProjectById(id: number): Observable<any>
    {
        return this._HttpClient.get(`Project/${id}`)
    }

    editProject(data: any, id:number) : Observable<any>
    {
        return this._HttpClient.put(`Project/${id}`, data)
    }
}
