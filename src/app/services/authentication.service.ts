import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(
    private _http: HttpClient,
    private _router: Router
  ) { }

  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this._http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    console.log( "Check if user is loggedIn " + !!localStorage.getItem("token") );
    return !!localStorage.getItem("token");
  }

  getToken() {
    return localStorage.getItem("token");
  }

  logoutUser() {
    localStorage.removeItem("token");
    this._router.navigate(['/events']);
  }

}
