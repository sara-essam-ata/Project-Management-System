import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/auth/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName = localStorage.getItem('userName')
  userEmail = localStorage.getItem('userEmail')
  // role  = localStorage.getItem('role')
  isEmployee:boolean=false;



  constructor(public dialog: MatDialog,private _AuthService: AuthService) {

  }
  ngOnInit() {
    this.isManger()
  }
isManger(){
  if(this._AuthService.role == 'Manager'){
   return this.isEmployee=true;
  }else{
    return this.isEmployee=false;
  }
}
  openLogoutDialog(): void{
    const dialogRef = this.dialog.open(LogoutComponent, {
      data: {},
      width: '25%'
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if(result){

      }
    });
  }
sayHello(){
  console.log('hello')
}
}
