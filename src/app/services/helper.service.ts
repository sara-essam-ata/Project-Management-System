import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HelperService {

  constructor(
      private _HttpClient:HttpClient
  ) { }

  onGetUsers():Observable<any>{
      return this._HttpClient.get('Users', {params: {pageSize:1000, pageNumber:1}})
  }

  onGetTasksCount():Observable<any>
  {
    return this._HttpClient.get('Task/count')
  }
  onGetUsresCount():Observable<any>
  {
    return this._HttpClient.get('Users/count')
  }
  onGetCurrentUser():Observable<any>
  {
    return this._HttpClient.get('Users/currentUser')
  }
  onUpdateCurrentUser(data:any):Observable<any>{
    return this._HttpClient.put('Users/',data)
  }
}
