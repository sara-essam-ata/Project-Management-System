import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { IListProject, TableData } from 'src/app/Models/project';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss'],
})
export class ManagerProjectsComponent implements OnInit {
  searchValue: string = '';
  private searchSubject: Subject<string> = new Subject<string>();

  tableData: TableData | any;
  listProjects: IListProject[] = [];
  pageSize: number = 10;
  pageNumber: number = 1;
  constructor(
    private _ProjectsService: ProjectsService,
    private dialog: MatDialog,
    private toastr: ToastrService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getMyProjects();
    this.searchSubject.pipe(debounceTime(1000)).subscribe({
      next: (res) =>{
        console.log(res);
        this.getMyProjects();
      }
    })

  }

  getMyProjects() {
    let parms = {
      pageSize: this.pageSize,
      pageNumber: this.pageNumber,
      title: this.searchValue,
    };
    this._ProjectsService.onGetManagerProjects(parms).subscribe({
      next: (res) => {
        console.log(res);
        this.tableData=res;

        this.listProjects = this.tableData.data;
        localStorage.setItem('projectsCount' , JSON.stringify(res.totalNumberOfRecords))

        this.listProjects = this.tableData.data
        localStorage.setItem('projectsCount',res.totalNumberOfRecords)

      }
    })
        this.tableData = res;
        this.listProjects = this.tableData.data;
        localStorage.setItem('projectsCount', res.totalNumberOfRecords);
      },
    });
  }

  // Delete
  openDeleteDialog(listProjects: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: listProjects,
      width: '35%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result.id);
        this.onDeleteProject(result.id);
      }
    });
  }

  onDeleteProject(id: number) {
    this._ProjectsService.deleteProject(id).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        this.toastr.error(err.error.message, 'Error!');
        console.log(err);
      },
      complete: () => {
        this.toastr.success('Project Deleted Successfully', 'Ok');
        this.getMyProjects();
      },
    });
  }

    // View
    openViewDialog(enterAnimationDuration: string, exitAnimationDuration: string, listProjects:IListProject): void {
      this.dialog.open(ViewProjectComponent, {
        width: '60%',
        data: listProjects,
        enterAnimationDuration,
        exitAnimationDuration,
      });
    }
    // openViewDialog(listProjects: IListProject): void {
    //   const dialogRef = this.dialog.open(ViewProjectComponent, {
    //     data: listProjects,
    //     width: '60%',
    //   });
  // View
  openViewDialog(listProjects: any): void {
    const dialogRef = this.dialog.open(ViewProjectComponent, {
      data: listProjects,
      width: '60%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      this.router.navigate(['/dashboard/manager/projects']);
    });
  }
  handlePageEvent(e: PageEvent) {
    console.log(e);

    this.pageSize = e.pageSize;
    this.pageNumber = e.pageIndex;

    this.getMyProjects();
  }

  onSearchInputChange() {
    this.searchSubject.next(this.searchValue);
  }
}


