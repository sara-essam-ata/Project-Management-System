import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../auth/Services/auth.service';

export const employeeGuard: CanActivateFn = ( state) => {
  const route = inject(Router);
  const authService= inject(AuthService);

  const token = localStorage.getItem('userToken');
  const role  = localStorage.getItem('role')

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

