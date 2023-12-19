import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/Services/auth.service';

@Injectable({
  providedIn:'root'
})
export class employeeGuard implements CanActivate{
  constructor(private router:Router, private _AuthService:AuthService){
    this._AuthService.getProfile()
  }
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |boolean | UrlTree {
      if(localStorage.getItem('userToken')!==null && localStorage.getItem('role')=='Employee'){
        return true;
      }
      else{
        this.router.navigate(['/dashboard']);
        return false;
      }
    }
  }