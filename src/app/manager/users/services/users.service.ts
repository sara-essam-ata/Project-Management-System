import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    constructor(
       private _HttpClient:HttpClient
    ) { }
    
    onGetUsers(parms:any):Observable<any>{
        return this._HttpClient.get('Users', {params: parms})
    }
    onActivateUser(id:number):Observable<any>{
        return this._HttpClient.put(`Users/${id}`,{})
    }

}
