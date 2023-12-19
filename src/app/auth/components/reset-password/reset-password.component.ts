import { Component, Optional } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  userEmail=localStorage.getItem('email');
  hide:boolean=false;
  Message:string='';
  restpassword=new FormGroup({
    email:new FormControl(this.userEmail,[Validators.required,Validators.email]),
    password:new FormControl(null, [
      Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
      ),
    ]),
    confirmPassword:new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    seed:new FormControl(null,[Validators.required]),


  })
  constructor(private _AuthService:AuthService,private tostar:ToastrService,private router:Router  ){

  }
  onSubmit(data:FormGroup){
    console.log(data);
     this._AuthService.onRestPassword(data.value).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.Message=res.message;
        
      },error:(err)=>{
       this.tostar.error(err.error.message,'Error');
      },complete:()=>{
        this.tostar.success(this.Message,'Successfully');
        this.router.navigate(['/auth/login'])

      }
    })
    
    
  }
 
}
