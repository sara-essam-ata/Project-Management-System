import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { UserProfileComponent } from '../shared/user-profile/user-profile.component';
import { managerGuard } from '../guards/manager.guard';
import { employeeGuard } from '../guards/employee.guard';


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
    {path:'profile',component:UserProfileComponent},
    {path:'updateProfile',component:UserProfileComponent},

  ]},
]
@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
    ]
})
export class DashboardModule { }
