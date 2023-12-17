import { CanActivateFn } from '@angular/router';

export const employeeGuard: CanActivateFn = (route, state) => {

  const token = localStorage.getItem('userToken');
  const role = localStorage.getItem('role');

  if(token !== null && role == 'Employee')
  {
    return true
  }
  else
  {
    return false
  }
};
