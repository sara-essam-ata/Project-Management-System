import { Component, OnInit } from '@angular/core';
import { TableData, IListProject } from 'src/app/Models/project';
import { PageEvent } from '@angular/material/paginator';
import { EmployeeProjectsService } from './services/EmployeeProjects.service';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-Employee-projects',
  templateUrl: './Employee-projects.component.html',
  styleUrls: ['./Employee-projects.component.scss']
})
export class EmployeeProjectsComponent implements OnInit {

  searchValue:string='';
  private searchSubject: Subject<string> = new Subject<string>();
  tableData:TableData|any;
  listProjects: IListProject[] = [];
  pageIndex: number = 0
  pageSize: number = 5;
  pageNumber: number | undefined = 1;

  constructor(
    private _EmployeeProjectsService:EmployeeProjectsService
  ) { }


  ngOnInit() {
    this.getMyProjects();
    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) =>{
        console.log(res);
        this.getMyProjects();
      }
    })  }
  getMyProjects() {
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      title : this.searchValue
    }
    this._EmployeeProjectsService.onGetEmployeeProjects(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableData=res;
        this.listProjects = this.tableData.data
      },error:(err)=>{

      },complete:()=>{
      }
    })
  }


  handlePageEvent(e: PageEvent) {
    console.log(e);
    this.pageSize = e.pageSize
    this.pageNumber = e.pageIndex + 1
    this.getMyProjects()


  }
  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }
}
