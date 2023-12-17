import { CanActivateFn } from '@angular/router';

export const managerGuard: CanActivateFn = (route, state) => {
  
  const token = localStorage.getItem('userToken');
  const role  = localStorage.getItem('Manager')

  if(token !== null && role == 'Manager')
  {
    return true
  } else 
  {
    return false;
  }
  
};
