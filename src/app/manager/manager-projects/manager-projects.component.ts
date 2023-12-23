import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './services/projects.service';
import { IListProject } from 'src/app/Models/project';
import { DeleteDialogComponent } from 'src/app/shared/delete-dialog/delete-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manager-projects',
  templateUrl: './manager-projects.component.html',
  styleUrls: ['./manager-projects.component.scss']
})
export class ManagerProjectsComponent implements OnInit {

  listProjects: IListProject[] = [];
  Message:string='';
  constructor(
    private _ProjectsService:ProjectsService,
  private dialog:MatDialog,private toast:ToastrService) { }

  ngOnInit() {
    this.getMyProjects()
  }
  getMyProjects(){
    this._ProjectsService.onGetManagerProjects().subscribe({
      next:(res)=>{
        console.log(res);
        this.listProjects = res.data
      }
    })
  }


  
  
  ondeletProject(id:number){
    this._ProjectsService.deleteProject(id).subscribe({
      next:(res)=>{
        console.log(res);
        
         
         this.Message=res.message;
      },error:(err)=>{
        console.log(err);
        
      },complete:()=>{
           this.toast.success(this.Message,'Projects deleted successfully');
          this.getMyProjects();
      }
    })
  }
  
  openDeleteDialog(projectData:any): void {
    console.log(projectData);
    
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: projectData,
      width:'40%'
    });
    
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    console.log(result);
    console.log(result.id);
    
    if(result){
       this.ondeletProject(result.id);      
    }
    
  });

}
}