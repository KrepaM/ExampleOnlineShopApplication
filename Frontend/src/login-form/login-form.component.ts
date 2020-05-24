import { Credentials } from './../../../Common/contracts/credentials';
import { GlobalVariablesService } from 'src/services/global-variables.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DictionaryService } from 'src/services/dictionary.service';
import { CookieService } from 'ngx-cookie-service';
import { ConnectionService } from 'src/services/server-communication.service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})

export class LoginFormComponent implements OnChanges, OnInit {

  constructor(
    private globalVariables: GlobalVariablesService,
    private dictionaryService: DictionaryService,
    private cookieService: CookieService,
    private connectionService: ConnectionService
  ) { };

  // Variables
  isLoggedIn: boolean = false;
  loginButtonLabel: string;
  logoutButtonLabel: string;
  loginInput: string = ""; // Jesli użytkownik jest zalogowany w formie coookie'sów uzupełnić to pole z cookie'sa
  passwordInput: string = "";

  // Services
  ngOnInit() {
    this.updateLabels();
    this.globalVariables.isLoggedIn.subscribe((value: boolean) => {
      this.isLoggedIn = value;
    });
  }

  ngOnChanges() {
    this.updateLabels();
  }

  updateLabels() {
    this.loginButtonLabel = this.dictionaryService.translate("LOGIN_LABEL");
    this.logoutButtonLabel = this.dictionaryService.translate("LOGOUT_LABEL");
  }

  login() {
    if (
      this.loginInput.length >= this.globalVariables.minLoginLength
      && this.passwordInput.length >= this.globalVariables.minPasswordLength
    ) {

    } else {

    }
  }

  logout() {

  }

  checkCookies() {
    // if(this.cookieService.check("loggedinCookie"))
  }

  validateCredentials() {
    let contract: Credentials = {
      login: this.loginInput,
      password: this.passwordInput
    };
    this.connectionService.connect("validateCredentials", contract).subscribe((result) => {

    });


  }

}
