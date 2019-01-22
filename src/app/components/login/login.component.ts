import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {};

  constructor(
    private _authentication: AuthenticationService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  loginUser() {
    console.log("Login the user " + JSON.stringify(this.loginUserData));
    this._authentication
          .loginUser(this.loginUserData)
          .subscribe(
            (res) => {
              console.log("The response is  " + JSON.stringify(res));
              localStorage.setItem("token", res.token);
              this._router.navigate(["/special"]);
            },
            (err) => console.log("There is an error" + JSON.stringify(err))
          );
  }

}
