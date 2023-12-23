import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProjectsService } from '../../services/projects.service';
import { FormGroup, FormControl } from '@angular/forms';
import { IProject } from 'src/app/Models/project';

@Component({
  selector: 'app-add-update-project',
  templateUrl: './add-update-project.component.html',
  styleUrls: ['./add-update-project.component.scss']
})
export class AddUpdateProjectComponent implements OnInit {

  projectId: any;
  isUpdatePage: boolean = false;
  projectData: IProject | any;

  constructor(private _ProjectsService: ProjectsService,
    private toastr: ToastrService,
    private router: Router,
    private _ActivatedRoute: ActivatedRoute) {

    // console.log(_ActivatedRoute.snapshot.params['id']);
    this.projectId = _ActivatedRoute.snapshot.params['id'];
    if (this.projectId) {
      this.isUpdatePage = true;
      this.getProjectById(this.projectId);
    } else {
      this.isUpdatePage = false
    }
  }

  projectForm = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null),
  })

  onSubmit(data: FormGroup) {

    if (this.projectId) {
      // Update
      this._ProjectsService.editProject(data.value, this.projectId).subscribe({
        next: (res) => {
          console.log(res);
        }, error: (err) => {
          this.toastr.error('Project Not Update', 'Ok');
        }, complete: () => {
          this.router.navigate(['/dashboard/manager/projects'])
          this.toastr.success('Project Update Successfully', 'Ok');
        }
      })
    } else {
      // Add
      // console.log(data.value);
      this._ProjectsService.onAddProject(data.value).subscribe({
        next: (res) => {
          console.log(res);

        }, error: (err) => {
          this.toastr.error(err.error.message, 'Error');
        }, complete: () => {
          this.router.navigate(['dashboard/manager/projects'])
        }
      })
    }
  }

  getProjectById(id: number) {
    this._ProjectsService.onProjectById(id).subscribe({
      next: (res) => {
        this.projectData = res;
      }, error: (err) => {
        this.toastr.error(err.error.message, 'Error!')
      }, complete: () => {
        this.projectForm.patchValue({
          title: this.projectData?.title,
          description: this.projectData?.description
        })
      }
    })
  }

  ngOnInit() {
  }
}
