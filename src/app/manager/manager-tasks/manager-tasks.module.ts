import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerTasksComponent } from './manager-tasks.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUpdateTaskComponent } from './components/add-update-task/add-update-task.component';

const routes:Routes = [
  {path:'', component:ManagerTasksComponent},
  {path:'add', component:AddUpdateTaskComponent},
  {path:'view/:id', component:AddUpdateTaskComponent}

  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ManagerTasksComponent, AddUpdateTaskComponent]
})
export class ManagerTasksModule { }
