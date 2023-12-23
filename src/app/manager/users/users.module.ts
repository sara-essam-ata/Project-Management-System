import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { BlockUserComponent } from './components/block-user/block-user.component';

const routes:Routes = [
  {path:'', component:UsersComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [UsersComponent,BlockUserComponent]
})
export class UsersModule { }
