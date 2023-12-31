import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTasksComponent } from './Employee-tasks.component';
import { Routes, RouterModule } from '@angular/router';

const routes:Routes = [
  {path:'', component: EmployeeTasksComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    


  ],
  declarations: [EmployeeTasksComponent]
})
export class EmployeeTasksModule { 
  
}
