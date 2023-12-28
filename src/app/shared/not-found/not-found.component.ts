import { Component } from '@angular/core';
import { Employee } from 'src/app/Models/project';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent {
  isEmployee:boolean=false;
  user:Employee | any;

  constructor(
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
