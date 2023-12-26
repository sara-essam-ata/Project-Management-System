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

getTaskCount():Observable<any>
{
  return this._HttpClient.get('Task/count')
}
getCurrentUser():Observable<any>
{
  return this._HttpClient.get('Users/currentUser')
}
}
