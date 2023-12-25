import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeProjectsComponent } from './Employee-projects.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'', component: EmployeeProjectsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [EmployeeProjectsComponent]
})
export class EmployeeProjectsModule { }
