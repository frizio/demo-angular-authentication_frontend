import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _registerUrl = "http://localhost:3000/api/register";

  constructor(
    private _http: HttpClient
  ) { }

  registerUser(user) {
    return this._http.post<any>(this._registerUrl, user);
  }

}
