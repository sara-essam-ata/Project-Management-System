<<<<<<< HEAD
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
=======
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
>>>>>>> 8ab05b2171a4a965595798b0b79fe91b51319c76
import { AuthService } from '../auth/Services/auth.service';

export const managerGuard: CanActivateFn = ( state) => {
  const route = inject(Router);
  const authService= inject(AuthService);

  const token = localStorage.getItem('userToken');
  const role  = localStorage.getItem('role')

  if(token !== null && role == 'Manager')
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
// export class managerGuard implements CanActivate{
//   constructor(private router:Router, private _AuthService:AuthService){
//     this._AuthService.getProfile()
//   }
//     canActivate(
//       route: ActivatedRouteSnapshot,
//       state: RouterStateSnapshot
//     ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree {
//       if(localStorage.getItem('userToken')!==null && localStorage.getItem('role')=='Manager'){
//         return true;
//       }
//       else{
//         this.router.navigate(['/dashboard']);
//         return false;
//       }
//     }
//   }
