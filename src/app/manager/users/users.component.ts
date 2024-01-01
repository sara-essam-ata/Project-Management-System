import { TableData } from './../../Models/project';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/project';
import { UsersService } from './services/users.service';
import { ActivatedRoute } from '@angular/router';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableData:TableData|any;
  searchValue:string='';
  listUsers: Employee[] = [];
  pageSize:number = 10;
  pageNumber:number=1;
  pageIndex: number = 0;
  Messgage:string='';
  userData:Employee|any;
  userId:any
  isActive: any;

  constructor(
    private _UsersService:UsersService,
    private ActivatedRoute:ActivatedRoute,
    private dialog:MatDialog,
    private toastr:ToastrService) { }

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
        this.tableData=res;
        this.listUsers = this.tableData.data;
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
       this.Messgage=res.message;
      },error:(err)=>{
        this.toastr.error(err.error.message, 'error')
      },complete:()=>{
        this.getAllUsers()
        this.toastr.success( this.Messgage ,'User Active now');
      }
    })
  }

  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.getAllUsers()
  }

 }


