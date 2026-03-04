import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService)
  const credentials = authService.getCredentials()

  console.log("Credentials", credentials)
  if (credentials) {
    if(req.url.includes('register')){
      return next(req)
    }
    const authResq = req.clone({
      setHeaders: {
        Authorization: "Basic "+btoa(credentials)
      }
    })
    return next(authResq)

  }
  return next(req)
};
