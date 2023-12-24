import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

 const routes:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},

 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeComponent,HomeComponent]
})
export class EmployeeModule { }
