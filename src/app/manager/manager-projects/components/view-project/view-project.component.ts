import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.scss']
})
export class ViewProjectComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewProjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.disableFormControls();
  }

  ngOnInit() {
  }

  projectForm = new FormGroup({
    title: new FormControl(null),
    description: new FormControl(null),
  })

  onNoClick(): void {
    this.dialogRef.close();
  }

  disableFormControls() {
    this.projectForm.get('title')?.disable();
    this.projectForm.get('description')?.disable();
  }

}


