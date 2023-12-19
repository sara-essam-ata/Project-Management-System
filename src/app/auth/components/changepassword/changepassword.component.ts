import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent {
  hide: boolean = true;
  constructor(private _AuthService:AuthService,
    private _toastr:ToastrService,
    private router:Router
    ){}
  changePasswordForm = new FormGroup({
    oldPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    newPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),
    confirmNewPassword: new FormControl(null,[Validators.required,Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$')]),  
  });

  onSubmit(data: FormGroup){
    this._AuthService.onChangePssword(data.value).subscribe({
      next:(res)=>{
        console.log(res);
      },error:(err)=>{
        this._toastr.error(err.error.messsage, 'error')
      },complete:()=>{
        this._toastr.success('password updated login now!', 'success');
        this.router.navigate(['/auth'])
      }
    })
  }

}
