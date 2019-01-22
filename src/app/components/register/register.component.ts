import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../../services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerUserData = {};

  constructor(
    private _authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

  registrerUser() {
    console.log("Register the user " + JSON.stringify(this.registerUserData));
    this._authentication
          .registerUser(this.registerUserData)
          .subscribe(
            (res) => {
              console.log("The response is  " + JSON.stringify(res));
              localStorage.setItem("token", res.token);
            },
            (err) => console.log("There is an error" + JSON.stringify(err))
          );
  }

}

