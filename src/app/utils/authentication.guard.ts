import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  
  constructor(
    private _router: Router,
    private _authentication: AuthenticationService
  ) {}

  canActivate(): boolean {
    console.log("Chiamato canActivate()");
    if (this._authentication.loggedIn()) {
      return true;
    } else {
      this._router.navigate(['/login']);
      return false;
    }
  }

}
