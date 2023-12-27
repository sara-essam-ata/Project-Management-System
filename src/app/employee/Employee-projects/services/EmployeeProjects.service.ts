import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListProject } from 'src/app/Models/project';

@Injectable({
    providedIn: 'root'
})
export class EmployeeProjectsService {

constructor(
    private _HttpClient:HttpClient
) { }

onGetEmployeeProjects(parms:any): Observable<any> {
    return this._HttpClient.get('Project/employee', {params:parms})
}
}
