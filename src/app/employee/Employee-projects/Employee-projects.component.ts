import { Component, OnInit } from '@angular/core';
import { TableData, IListProject } from 'src/app/Models/project';
import { EmployeeProjectsService } from '../services/EmployeeProjects.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-Employee-projects',
  templateUrl: './Employee-projects.component.html',
  styleUrls: ['./Employee-projects.component.scss']
})
export class EmployeeProjectsComponent implements OnInit {

  searchValue:string='';
  tableData:TableData|any;
  listProjects: IListProject[] = [];
  pageSize:number = 5;
  pageNumber:number=1;
  constructor(
    private _EmployeeProjectsService:EmployeeProjectsService
  ) { }


  ngOnInit() {
    this.getMyProjects()
  }
  getMyProjects() {
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
    }
    this._EmployeeProjectsService.onGetEmployeeProjects(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableData=res;
        this.listProjects = this.tableData.data
      }
    })
  }
  handlePageEvent(e:PageEvent){
    console.log(e);

      this.pageSize = e.pageSize;
      this.pageNumber=e.pageIndex;

      this.getMyProjects()
  }

}
