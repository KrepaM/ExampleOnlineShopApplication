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

  // Config -> utowrzyć osobny serwis
  serverAddress: string = "http://localhost:8080/"; // Sprawdzić że można po https
  minLoginLength: number = 3;
  minPasswordLength: number = 5;
  //


}
