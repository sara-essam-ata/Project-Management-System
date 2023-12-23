import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {
  userId: number | undefined; 
  userName: string | undefined; 
  isActive: boolean | undefined;
  constructor( public dialogRef: MatDialogRef<BlockUserComponent>,
    private Router:Router,
    private _UsersService:UsersService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
    
  ngOnInit(){
  }
  onClose(){
   this.dialogRef.close();
  }
  
  

}
