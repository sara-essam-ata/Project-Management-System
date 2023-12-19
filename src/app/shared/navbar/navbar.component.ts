import { Component, OnInit } from '@angular/core';
import { LogoutComponent } from '../logout/logout.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userName = localStorage.getItem('userName')
  userEmail = localStorage.getItem('userEmail')


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
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

}
