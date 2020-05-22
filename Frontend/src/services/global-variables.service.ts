import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class GlobalVariablesService {

  constructor() { };

  // Logged In
  private isLoggedInSource = new BehaviorSubject(false);
  isLoggedIn = this.isLoggedInSource.asObservable();
  changeIsLoggedIn(value: boolean) {
    this.isLoggedInSource.next(value);
  }
  //

}
