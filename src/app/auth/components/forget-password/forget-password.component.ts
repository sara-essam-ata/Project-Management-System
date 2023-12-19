import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _AuthService:AuthService,
    private _toastr:ToastrService,
    private _Router:Router) { }

    loginForm = new FormGroup({
      email: new FormControl(null),
    })
    // [Validators.required,Validators.email]

    email:string = ''

    errorMessage:string='';

  onRquestReset(data: FormGroup){
    
    this._AuthService.onRequestResetPassword(data.value).subscribe({
      next: (res: any)=>{
        this.errorMessage = res.message;
      }, error: (err)=>{
        this._toastr.error(err.error.errorMessage, 'Error!');
      },complete: ()=>{
        this._toastr.success(this.errorMessage, 'Successfully!');
        this._Router.navigate(['/auth/resetPassword']);
        localStorage.setItem('email' , data.value);

      }
    })
  }

  ngOnInit() {
  }

}
