import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { IListProject } from 'src/app/Models/project';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit {

  listProjects: IListProject[] = [];
  // projectData: IListProject | any;
  constructor(
    private _ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private router: Router,
    private dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.getMyProjects()
  }
  getMyProjects() {
    this._ProjectsService.onGetManagerProjects().subscribe({
      next: (res) => {
        console.log(res);
        this.listProjects = res.data
      }
    })
  }

  // View
  openViewDialog(listProjects: any): void {
    const dialogRef = this.dialog.open(ViewProjectComponent, {
      data: this.listProjects,
      width: '60%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.getMyProjects()
      }
    });
  }


  // Delete
  // openDeleteDialog(listProjects: any): void {
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     data: this.listProjects,
  //     width: '40%',
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     console.log(result);
  //     if (result) {
  //       console.log(result.id);
  //       this.onDeleteCategory(result.id);
  //     }
  //   });
  // }
  // onDeleteCategory(id: number) {
  //   this._ProjectsService.onDeleteProject(id).subscribe({
  //     next: (res) => {
  //       console.log(res);
  //     }, error: (err) => {
  //       console.log(err);
  //     }, complete: () => {
  //       this.toastr.success('Project Deleted Successfully', 'Ok');
  //       this.getMyProjects()
  //     }
  //   })
  // }


}
