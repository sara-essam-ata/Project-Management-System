import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';

 const routes:Routes=[
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent},
{
  path: 'projects',
  loadChildren: () => import('./Employee-projects/Employee-projects.module').then(m => m.EmployeeProjectsModule)
},
{
  path: 'tasks',
  loadChildren: () => import('./Employee-tasks/Employee-tasks.module').then(m => m.EmployeeTasksModule)
},

 ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [EmployeeComponent,HomeComponent]
})
export class EmployeeModule { }
