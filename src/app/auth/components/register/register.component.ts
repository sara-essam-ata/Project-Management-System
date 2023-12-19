import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  hide = true;
  hideConfirm = true;
  userEmail = localStorage.getItem('email');
  message: string = '"Welcome In PMS"';
  registerForm = new FormGroup({
    userName: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern(''),
    ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}'),
    ]),
    country: new FormControl(null, [
      Validators.required
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
      Validators.pattern('^01[0-2]d{1,8}$'),
    ]),
    profileImage: new FormControl(null),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,16}$')    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[#?!@$%^&*-]).{8,16}$')    ]),
  }
  ,
    {
      validators: this.passwordMatchValidator,
    }
  );
  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    public dialog: MatDialog
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
  onSubmit(data: FormGroup){

  }
}
