import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/project';
import { UsersService } from './services/users.service';
import { ActivatedRoute } from '@angular/router';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  listUsers: Employee[] = [];
  pageSize:number = 10;
  pageNumber:number = 1;
  userData:Employee|any;
  userId:any
  isActive: any;
  constructor(
    private _UsersService:UsersService,
    private ActivatedRoute:ActivatedRoute,
    private dialog:MatDialog,
    private toastr:ToastrService

  ) { 
       
    }

  ngOnInit() {
    this.getAllUsers()
  }
  getAllUsers(){
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,

    }
    this._UsersService.onGetUsers(parms).subscribe({
      next:(res)=>{
        console.log(res);
        this.listUsers = res.data
      }
    })
  }
  openBlockDialog(item:Employee): void {
    const dialogRef = this.dialog.open(BlockUserComponent, {
      data: item,
      width:'35%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      if(result){
        this.activateUser(result)
      }
    });
  }
  activateUser(id:number){
    this._UsersService.onActivateUser(id).subscribe({
      next:(res)=>{
      },error:(err)=>{
        this.toastr.error('error')
      },complete:()=>{
        this.getAllUsers()
        this.toastr.success('success')
      }
    })
  }
  
  }


