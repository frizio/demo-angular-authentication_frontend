import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(request, next)  {
    console.log("Intercept the request and add the token");
    let tokenizedRequest = request.clone(
      {
        setHeaders: {
          Authorization: 'Bearer ' + 'xxx.yyy.zzz'
        }
      }
    );
    return next.handle(tokenizedRequest);
  }


}
