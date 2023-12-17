import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;

  constructor(private _AuthService:AuthService,
    // private _toastr:ToastrService,
    private _Router:Router) { }

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  message:string=''
  onSubmit(data: FormGroup)
  {
    console.log(data);
    this._AuthService.onLogin(data.value).subscribe({
      next: (res)=>{
        console.log(res);
        this.message = res.message
        localStorage.setItem('userToken',res.token);
        
      }, error: (err)=>{
        // this._toastr.error(err.error.message , 'Error!');

      }, complete: ()=>{
        this._AuthService.getProfile();
        this._Router.navigate(['/dashboard']);
        // this._toastr.success('Logged In' , 'Successfully');
      }
    })
    
  }

  ngOnInit() {
  }

}
