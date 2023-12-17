import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { employeeGuard } from '../guards/employee.guard';
import { managerGuard } from '../guards/manager.guard';

const routes:Routes = [
  {path: '', component: DashboardComponent, children: [
    {
      path: 'manager', canActivate: [managerGuard],
      loadChildren: () => import('../manager/manager.module').then(m => m.ManagerModule)
    },
    {
      path: 'employee', canActivate: [employeeGuard],
      loadChildren: () => import('../employee/employee.module').then(m => m.EmployeeModule)
    },
  ]},
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
