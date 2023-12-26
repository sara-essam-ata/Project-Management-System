import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerProjectsComponent } from './manager-projects.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddUpdateProjectComponent } from './components/add-update-project/add-update-project.component';
import { ViewProjectComponent } from './components/view-project/view-project.component';

const routes:Routes = [
  {path:'', component:ManagerProjectsComponent},
  {path:'add', component:AddUpdateProjectComponent},
  {path:'edit/:id', component:AddUpdateProjectComponent},


  ]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [ManagerProjectsComponent,AddUpdateProjectComponent,ViewProjectComponent]
})
export class ManagerProjectsModule { }
