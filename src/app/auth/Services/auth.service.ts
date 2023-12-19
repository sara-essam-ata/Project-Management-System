import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { ILogin, IRegister } from 'src/app/Model/auth';
import { IChangePassword } from 'src/app/Model/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  role:string | null = '';

  constructor(private _HttpClient:HttpClient) {
    if(localStorage.getItem('role') !== null)
    {
      this.getProfile();
    }
  }

  getProfile()
  {
    let encoded: any = localStorage.getItem('userToken');

    let decoded: any = jwtDecode(encoded);

    console.log(decoded);

    localStorage.setItem('role' , decoded.userGroup);
    localStorage.setItem('userName' , decoded.userName);
    localStorage.setItem('userEmail' , decoded.userEmail);


    this.getRole();
  }

  getRole()
  {
    if(localStorage.getItem('userToken') !== null && localStorage.getItem('role') )
    {
      this.role = localStorage.getItem('role') ;
    }
  }

  onLogin(data: ILogin):Observable<any>
  {
    return this._HttpClient.post('Users/Login' , data)
  }

  onRegister(data: any):Observable<any>
  {
    return this._HttpClient.post('Users/Register' , data)
  }
  onVerify(data:any){
    return this._HttpClient.put('Users/verify', data);
  }

  onChangePssword(data: IChangePassword):Observable<any>{
    return this._HttpClient.put('Users/ChangePassword', data)
  }

  onRequestResetPassword(data:string):Observable<any>
  {
    return this._HttpClient.post('Users/Reset/Request', {email: data})
  }

  onRestPassword(data:any)
 {
  return this._HttpClient.post('Users/Reset', data)

 }
 onRequestReset(data:string)
 {
  return this._HttpClient.post('Users/Reset/Request' , {email:data})

 }
}
