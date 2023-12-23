import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { IListProject } from 'src/app/Models/project';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { ViewProjectComponent } from './components/view-project/view-project.component';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit {

  listProjects: IListProject[] = [];
  constructor(
    private _ProjectsService:ProjectsService,
    private dialog: MatDialog,
    private toastr: ToastrService,
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

  // Delete
  openDeleteDialog(listProjects: any): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: listProjects,
      width: '40%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        console.log(result.id);
        this.onDeleteCategory(result.id);
      }
    });
  }
  onDeleteCategory(id: number) {
    this._ProjectsService.deleteProject(id).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err);
      }, complete: () => {
        this.toastr.success('Project Deleted Successfully', 'Ok');
        this.getMyProjects();
      }
    })
  }
  
  // openDeleteProject(projectData:any): void {
  //   console.log(projectData);
    
  //   const dialogRef = this.dialog.open(DeleteDialogComponent, {
  //     data: projectData,
  //     width:'40%'
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     // console.log(result);
  //     if (result) {
  //       this.getMyProjects();
  //     }
  //   });
  // }

}
