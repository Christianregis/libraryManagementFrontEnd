import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth';

export const memberGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(authService.getUser()?.role === 'MEMBER'){
    return true;
  }else{
    router.navigate(['login'])
    return false
  }
};
