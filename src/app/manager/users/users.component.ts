import { TableData } from './../../Models/project';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Models/project';
import { UsersService } from './services/users.service';
import { ActivatedRoute } from '@angular/router';
import { BlockUserComponent } from './components/block-user/block-user.component';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  tableData:TableData|any;
  listUsers: Employee[] = [];

  pageSize:number = 10;
  pageNumber:number=1;
  userData:Employee|any;
  userId:any
  isActive: any;
  constructor(
    private _UsersService:UsersService,

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
        this.tableData=res;
        this.listUsers = this.tableData.data;
      }
    })
  }
  
  handlePageEvent(e:PageEvent){
    console.log(e);

      this.pageSize = e.pageSize;
      this.pageNumber=e.pageIndex;  
  
      this.getAllUsers()  
  }
  }


