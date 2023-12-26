import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {  Router } from '@angular/router';
import { Employee } from 'src/app/Models/project';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userId:number | any;
  user:Employee | any;
  pathHttps: string = 'https://upskilling-egypt.com:443/';
  Messgage:string='';
  isEmployee:boolean=false;

constructor(
  private _router: Router,
  private _HelperService:HelperService,
  private _AuthService: AuthService
  ){
this.getUserById()
}
ngOnInit() {
  this.isManger()
}
isManger(){
if(this._AuthService.role == 'Manager'){
 return this.isEmployee=true;
}else{
  return this.isEmployee=false;
}
}
getUserById(){
this._HelperService.getCurrentUser().subscribe({
  next: (res) => {
console.log(res);
this.user=res;
  },
  error: (err) => {
    console.log(err.error.message);
  },
  complete: () => {
  }
})}


}
