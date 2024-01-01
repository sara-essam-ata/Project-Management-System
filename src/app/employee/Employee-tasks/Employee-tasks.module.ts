import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeTasksComponent } from './Employee-tasks.component';
import { Routes, RouterModule } from '@angular/router';
import {CdkDrag, CdkDropList, CdkDropListGroup, DragDropModule} from '@angular/cdk/drag-drop';
import { SharedModule } from 'src/app/shared/shared.module';
const routes:Routes = [
  {path:'', component: EmployeeTasksComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    DragDropModule,
  ],
  declarations: [EmployeeTasksComponent]
})
export class EmployeeTasksModule { 
  
}
