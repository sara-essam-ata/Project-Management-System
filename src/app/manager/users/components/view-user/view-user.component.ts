import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsersService } from '../../services/users.service';
import { Employee } from 'src/app/Models/project';
import { FormControl, FormGroup } from '@angular/forms';
import { BlockUserComponent } from '../block-user/block-user.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent {
  userId:number | any;
  user:Employee | any;
  pathHttps: string = 'https://upskilling-egypt.com:443/';
  Messgage:string='';

constructor(
  private toastr: ToastrService,
  private _router: Router,
  private _UsersService:UsersService,
  private _activatedRoute: ActivatedRoute,
  private dialog:MatDialog,
  ){
    this.userId = _activatedRoute.snapshot.params['id']
    this.getUserById(this.userId);
}
getUserById(id:number){
this._UsersService.onGetUserById(id).subscribe({
  next: (res) => {
console.log(res);
this.user=res;
  },
  error: (err) => {
    console.log(err.error.message);
  },
  complete: () => {
  }
})}
openBlockDialog(item:Employee): void {
  const dialogRef = this.dialog.open(BlockUserComponent, {
    data: item,
    width:'35%'
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed',result);
    if(result){
      this.activateUser(result)
    }
  });
}
activateUser(id:number){
  this._UsersService.onActivateUser(id).subscribe({
    next:(res)=>{
     this.Messgage=res.message;
    },error:(err)=>{
      this.toastr.error(err.error.message, 'error')
    },complete:()=>{
      this.getUserById(this.userId);
      this.toastr.success( this.Messgage ,'User Active now');
    }
  })
}


}


