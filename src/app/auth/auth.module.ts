import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';

import { RegisterComponent } from './components/register/register.component';
import { VerifyComponent } from './components/verify/verify.component';

import { RequestRestPasswordComponent } from './components/request-rest-password/request-rest-password.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetPassword', component: ForgetPasswordComponent },
  { path: 'resetPassword', component: ResetPasswordComponent },
  { path: 'changePassword', component: ChangepasswordComponent },
  { path: 'verify', component: VerifyComponent },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    AuthComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    ChangepasswordComponent,
    RegisterComponent,
    VerifyComponent,
  ],

  declarations: [AuthComponent, LoginComponent, ForgetPasswordComponent, ResetPasswordComponent, ChangepasswordComponent, RequestRestPasswordComponent]
})
export class AuthModule {}
