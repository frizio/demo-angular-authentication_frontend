import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {};

  constructor() { }

  ngOnInit() {
  }

  loginUser() {
    console.log("Login the user " + JSON.stringify(this.loginUserData));

  }

}
