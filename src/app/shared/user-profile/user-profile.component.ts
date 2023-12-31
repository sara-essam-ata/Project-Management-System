import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Employee } from 'src/app/Models/project';
import { AuthService } from 'src/app/auth/Services/auth.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  userId:number | any;
  user:Employee | any;
  pathHttps: string = 'https://upskilling-egypt.com/';
  Messgage:string='';
  isEmployee:boolean=false;
  isView:boolean=true;
  isUpdate:boolean=true;

  editProfileForm = new FormGroup({
    userName: new FormControl(null, [Validators.required,
      Validators.pattern('([a-zA-Z]){3,12}([0-9]{1,3})'),
    ]),
    email: new FormControl(null, [Validators.required,Validators.email]),
    country: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required,
      Validators.pattern('^(01|01|00201)[0-2,5]{1}[0-9]{8}'),
    ]),
    confirmPassword: new FormControl(null, [Validators.required,
      Validators.pattern(
        '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$'
      ),
    ]),
    imagePath: new FormControl(null)
  });
  imgSrc: any;
  hide = true;
  hideConfirm = true;

constructor(
  private router: Router,
  private _HelperService:HelperService,
  private _AuthService: AuthService,
  private toastr:ToastrService,
  private ActivatedRoute:ActivatedRoute
  ){
  this.getCurrentUser()
  ActivatedRoute.url.subscribe(url=>{
    this.isView = url.some(segment=> segment.path==='profile')
  })
  ActivatedRoute.url.subscribe(url=>{
    this.isUpdate = url.some(segment=> segment.path==='updateProfile')
  })
  if(this.isUpdate){
    this.enableFormControls()
  }
  else if(this.isView){
    this.disableFormControls()
  }
  }
  enableFormControls(){
    this.editProfileForm.get('userName')?.enable();
    this.editProfileForm.get('email')?.enable();
    this.editProfileForm.get('country')?.enable();
    this.editProfileForm.get('phoneNumber')?.enable();
    this.editProfileForm.get('confirmPassword')?.enable();
  }
  disableFormControls(){
    this.editProfileForm.get('userName')?.disable();
    this.editProfileForm.get('email')?.disable();
    this.editProfileForm.get('country')?.disable();
    this.editProfileForm.get('phoneNumber')?.disable();
    this.editProfileForm.get('confirmPassword')?.disable();
  }
  ngOnInit() {
    this.isManager()
  }
  isManager(){
  if(this._AuthService.role == 'Manager'){
  return this.isEmployee=true;
  }else{
    return this.isEmployee=false;
  }
  }
  getCurrentUser(){
  this._HelperService.onGetCurrentUser().subscribe({
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
  onSubmit(data: FormGroup) {
    console.log(data.value);
    let myData = new FormData();
    let myMap = new Map(Object.entries(data.value));
    for (const [key, value] of myMap) {
      myData.append(key, data.value[key]);
    }
    myData.append('profileImage', this.imgSrc, this.imgSrc['name']);
    this._HelperService.onUpdateCurrentUser(myData).subscribe({
      next: (res: any) => {
        console.log(res);
      },
      error: (err: any) => {
        console.log(err);
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success('profile updated successfully');
        if(localStorage.getItem('role')=='Manager'){
          this.router.navigate(['/dashboard/manager/updateProfile'])
        }
        else{
          this.router.navigate(['/dashboard/employee/updateProfile'])
        }
      },
    });
  }
  
  files: File[] = [];

  onSelect(event: any) {
    console.log(event);
    this.imgSrc = event.addedFiles[0];
    this.files.push(...event.addedFiles);
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
