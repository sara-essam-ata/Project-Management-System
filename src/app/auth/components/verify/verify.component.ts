import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../../Services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss'],
})
export class VerifyComponent {
  verifyEmail = localStorage.getItem('email');
  verifyForm = new FormGroup({
    email: new FormControl(this.verifyEmail, [Validators.required, Validators.email]),
    code: new FormControl(null,[Validators.required, Validators.pattern('[a-zA-Z0-9]{4}')])
  });
  message: string = '"Welcome"';
  constructor(
    private _authService: AuthService,
    private toastr: ToastrService,
    private _router: Router
  ) {}

  onSubmit(data: FormGroup) {
    console.log(data.value);
    this._authService.onVerify(data.value).subscribe({
      next: (res: any) => {
        res = this.verifyForm;
      },
      error: (err: any) => {
        this.toastr.error(err.error.message, 'Error!');
      },
      complete: () => {
        this.toastr.success(this.message, 'Hello');
        this._router.navigate(['/auth/login']);
      },
    });
  }
}
