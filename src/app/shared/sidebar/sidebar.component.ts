import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/Services/auth.service';

interface IMenu{
  title:string,
  icon:string,
  link:string,
  isActive:Boolean
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() isOpenedValue = new EventEmitter<boolean>();
  isOpened:boolean =true;

  constructor(private _AuthService:AuthService, private router:Router,
    private toastr:ToastrService,public dialog: MatDialog) { }

 isManager() : boolean {
   return this._AuthService.role == 'Manager'? true : false;
 }
 isEmployee() : boolean {
   return this._AuthService.role == 'Employee'? true : false;
 }
 ngOnInit() {
  if(this.isManager()){
    this.router.navigate(['/dashboard/manager/home'])
  }
  else if(this.isEmployee()){
    this.router.navigate(['/dashboard/employee/home'])
  }
 }
 menu:IMenu[]=[
   {
     title: 'Home',
     icon: 'fa-solid fa-house',
     link: '/dashboard/manager/home',
     isActive: this.isManager() || this.isEmployee()
   },
   {
     title: 'Users',
     icon: 'fa-solid fa-users',
     link: '/dashboard/manager/users',
     isActive: this.isManager()
   },
   {
     title: 'Projects',
     icon: 'fa-solid fa-calendar-day',
     link: '/dashboard/manager/projects',
     isActive: this.isManager()
   },
   {
     title: 'Tasks',
     icon: 'fa-solid fa-list-check',
     link: '/dashboard/manager/tasks',
     isActive: this.isManager()
   },
   {
     title: 'Projects',
     icon: 'fa-solid fa-calendar-day',
     link: '/dashboard/employee/recipes',
     isActive: this.isEmployee()
   },
   {
     title: 'Tasks',
     icon: 'fa-solid fa-list-check',
     link: '/dashboard/user/favourites',
     isActive: this.isEmployee()
   },
   {
    title: 'Tasks',
    icon: 'fa-solid fa-heart',
    link: '/dashboard/employee/favourites',
    isActive: this.isEmployee()
  },
 ]
 onClicked() {
  this.isOpened = !this.isOpened;
  this.isOpenedValue.emit(this.isOpened);
  console.log(this.isOpened)
}

}
