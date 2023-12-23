import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITask } from 'src/app/Models/project';

@Injectable({
    providedIn: 'root'
  })
export class TaskService {

    constructor(
        private _HttpClient:HttpClient
    ) { }

    onGetManagerTasks():Observable<any>{
        return this._HttpClient.get('Task/manager')
    }

    // onProjectById(id: number): Observable<any>
    // {
    //     return this._HttpClient.get(`Project/${id}`)
    // }

    // editProject(data: any, id:number) : Observable<any>
    // {
    //     return this._HttpClient.put(`Project/${id}`, data)
    // }

    onAddTask(data: ITask):Observable<any>{
        return this._HttpClient.post('Task', data)
    }

    onDeleteTask(id: number): Observable<any> {
        return this._HttpClient.delete(`Task/${id}`)

    }

}
