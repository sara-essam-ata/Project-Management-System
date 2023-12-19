import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { RequestRestPasswordComponent } from '../request-rest-password/request-rest-password.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide:boolean=true;

  constructor(private _AuthService:AuthService,
    private _toastr:ToastrService,
    private _Router:Router, private dialog:MatDialog) { }

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
        this._toastr.error(err.error.message , 'Error!');

      }, complete: ()=>{
        this._AuthService.getProfile();
        this._Router.navigate(['/dashboard']);
        this._toastr.success('Logged In' , 'Successfully');
      }
    })
    
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RequestRestPasswordComponent, {
       width:'100vh',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      
      if(result){
        this.onRestRequest(result);
      }
    });
  }
  onRestRequest(data:string){
    this._AuthService.onRequestReset(data).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.message=res.message;
        
      },error:(err)=>{
        this._toastr.error(err.error.message,'Error');

        
      },complete:()=>{
        this._toastr.success(this.message,'Successfully');
        this._Router.navigate(['/auth/resetPassword']);
                localStorage.setItem('email',data);

      }
    })
  }

  ngOnInit() {
  }

}
