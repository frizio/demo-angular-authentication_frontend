import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private _authentication: AuthenticationService
  ) { }

  intercept(request, next)  {
    console.log("Intercept the request and add the token");
    let tokenizedRequest = request.clone(
      {
        setHeaders: {
          Authorization: 'Bearer ' + this._authentication.getToken()
        }
      }
    );
    return next.handle(tokenizedRequest);
  }


}
