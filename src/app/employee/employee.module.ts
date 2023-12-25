import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

 const routes:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{
  path: 'projects',
  loadChildren: () => import('./components/Employee-projects/Employee-projects.module').then(m => m.EmployeeProjectsModule)
},
{
  path: 'tasks',
  loadChildren: () => import('./components/Employee-tasks/Employee-tasks.module').then(m => m.EmployeeTasksModule)
},

 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmployeeComponent,HomeComponent]
})
export class EmployeeModule { }
