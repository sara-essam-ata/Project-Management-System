import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private _AuthService:AuthService,
    private _toastr:ToastrService,
    private _Router:Router) { }

    email:string = ''
    errorMessage:string='';

  onRquestReset(data: string){
    
    this._AuthService.onRequestResetPassword(data).subscribe({
      next: (res: any)=>{
        // this.errorMessage = res.message;
        localStorage.setItem('email' , data);
        
      }, error: (err)=>{
        this._toastr.error(err.error.errorMessage, 'Error!');
      },complete: ()=>{
        this._toastr.success("Request Success", 'Successfully!');
        this._Router.navigate(['/auth/resetPassword']);
      }
    })
  }

  ngOnInit() {
  }

}
