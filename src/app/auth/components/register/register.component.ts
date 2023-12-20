import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { IRegister } from 'src/app/Models/auth';
import { VerifyComponent } from '../verify/verify.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  hideConfirm = true;
  verifyEmail:any;
  imgSrc: any;
  message: string = '"Welcome In PMS"';
  pathHttps: string = 'https://upskilling-egypt.com:443/';

  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})')
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    country: new FormControl(null, [
      Validators.required
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(01|01|00201)[0-2,5]{1}[0-9]{8}')
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,16}$')
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,16}$')
    ]),
  },{validators: this.passwordMatchValidator,}
  );

  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    public dialog: MatDialog,
    private _Router:Router
  ) {}

  passwordMatchValidator(control: any) {
    let password =control.get('password');
    let confirmPassword=control.get('confirmPassword')
    if (password.value == confirmPassword.value) {
      return null;
    } else {
      control
        .get('confirmPassword')
        ?.setErrors({ invalid: 'password and confirm password not match' });
      return { invalid: 'password and confirm password not match' };
    }
  }
  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myData = new FormData();
    myData.append('userName', data.value.userName);
    myData.append('email', data.value.email);
    myData.append('country', data.value.country);
    myData.append('phoneNumber', data.value.phoneNumber);
    myData.append('profileImage', this.imgSrc,this.imgSrc.name);
    myData.append('password', data.value.password);
    myData.append('confirmPassword', data.value.confirmPassword);

    this._authService.onRegister(myData).subscribe({
      next: (res: IRegister) => {
        console.log(res);
        this.verifyEmail = localStorage.setItem('verifyEmail', res.email);

      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success(this.message, 'Succeded');
        this._Router.navigate(['/auth/verify'])
      },
    });
  }

  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
