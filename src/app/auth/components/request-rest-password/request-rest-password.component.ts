import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-rest-password',
  templateUrl: './request-rest-password.component.html',
  styleUrls: ['./request-rest-password.component.scss']
})
export class RequestRestPasswordComponent {

  
email:string='';
constructor(  private dialogRef:MatDialogRef<RequestRestPasswordComponent>) { }

onclose(){
  this.dialogRef.close();
}
}
