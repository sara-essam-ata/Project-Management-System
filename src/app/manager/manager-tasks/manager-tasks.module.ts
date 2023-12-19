import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerTasksComponent } from './manager-tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [
  {path:'', component:ManagerTasksComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ManagerTasksComponent]
})
export class ManagerTasksModule { }
