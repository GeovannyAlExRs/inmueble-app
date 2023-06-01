import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InjectionSessionInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    try {
      const token = localStorage.getItem('token')

      if(!token) {
        return next.handle(request);
      }

      const newRequest = request.clone({
        setHeaders: { authorization: `Bearer ${token}` }
      })

      console.log('TOKEN Interceptor: ', newRequest);


      return next.handle(newRequest)
    } catch (error) {
      console.log('Error ', error)
      return next.handle(request)
    }
  }
}
