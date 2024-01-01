import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeTaskService {

constructor(
  private _HttpClient:HttpClient
) { }

  onGetAllTaskInProject(id:number,parms:any):Observable<any>{
    return this._HttpClient.get(`Task/project/${id}`,{params:parms})
  }
  onGetAllMyTasks(parms:any):Observable<any>{
    return this._HttpClient.get('Task',{params:parms})
  }
  onChangeStatus(id:number,status:string):Observable<any>{
    return this._HttpClient.put(`Task/${id}/change-status`,{"status":status})
  }
}
