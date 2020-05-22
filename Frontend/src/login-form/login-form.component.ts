import { GlobalVariablesService } from 'src/services/global-variables.service';
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { DictionaryService } from 'src/services/dictionary.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
})

export class LoginFormComponent implements OnChanges, OnInit {

  constructor(
    private globalVariables: GlobalVariablesService,
    private dictionaryService: DictionaryService,
    private cookieService: CookieService
  ) { };

  // Variables
  isLoggedIn: boolean = false;
  loginButtonLabel: String;
  logoutButtonLabel: String;

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

  }

  logout() {

  }

  checkCookies() {
    // if(this.cookieService.check("loggedinCookie"))
  }

}
