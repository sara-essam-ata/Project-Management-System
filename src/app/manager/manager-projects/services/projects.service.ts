import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/Models/project';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {

    constructor(
        private _HttpClient: HttpClient
    ) { }

    onGetManagerProjects(parms:any): Observable<any> {
        return this._HttpClient.get('Project/manager', {params:parms})
    }

    onProjectById(id: number): Observable<any> {
        return this._HttpClient.get(`Project/${id}`)
    }

    editProject(data: any, id: number): Observable<any> {
        return this._HttpClient.put(`Project/${id}`, data)
    }

    deleteProject(id: number): Observable<any> {
        return this._HttpClient.delete(`Project/${id}`)
    }

    onAddProject(data: any): Observable<any> {
        return this._HttpClient.post('Project', data)

    }

}
