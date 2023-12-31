import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TaskService {

    constructor(
        private _HttpClient:HttpClient
    ) { }

    onGetManagerTasks(parms:any):Observable<any>{
        return this._HttpClient.get('Task/manager',{params:parms})
    }

    onAddTask(data: FormGroup):Observable<any>{
        return this._HttpClient.post('Task', data)
    }
    ongetTaskbyId(id: number):Observable<any>{
        return this._HttpClient.get(`Task/${id}`)
    }
    onEditTask(id: number,data:FormGroup):Observable<any>{
        return this._HttpClient.put(`Task/${id}`,data)
    }

    onDeleteTask(id: number): Observable<any> {
        return this._HttpClient.delete(`Task/${id}`)

    }

}
