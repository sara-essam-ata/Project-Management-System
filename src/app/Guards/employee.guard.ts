import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/Services/auth.service';

export const employeeGuard: CanActivateFn = ( state) => {
  const route = inject(Router);
  const authService= inject(AuthService);

  const token = localStorage.getItem('userToken');
  const role  = localStorage.getItem('Employee')

  if(token !== null && role == 'Employee')
  {
    return true
  } else
  {
    authService.getProfile();
    route.navigate(['/dashboard']);
    return false;
  }

};



// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../auth/Services/auth.service';

// @Injectable({
//   providedIn:'root'
// })
// export class employeeGuard implements CanActivate{
//   constructor(private router:Router, private _AuthService:AuthService){
//     this._AuthService.getProfile()
//   }
//     canActivate(
//       route: ActivatedRouteSnapshot,
//       state: RouterStateSnapshot
//     ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree {
//       if(localStorage.getItem('userToken')!==null && localStorage.getItem('role')=='Employee'){
//         return true;
//       }
//       else{
//         this.router.navigate(['/dashboard']);
//         return false;
//       }
//     }
//   }
