import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from '../shared/user-profile/user-profile.component';

const routes:Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'profile',component:UserProfileComponent},

  {
    path: 'projects',
    loadChildren: () => import('./manager-projects/manager-projects.module').then(m => m.ManagerProjectsModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./manager-tasks/manager-tasks.module').then(m => m.ManagerTasksModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },


]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ManagerComponent,HomeComponent]
})
export class ManagerModule { }
