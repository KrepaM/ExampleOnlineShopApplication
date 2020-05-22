import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ConnectionService {

  constructor(private http: HttpClient) { }

  getInfo(vin: string): Observable<any> {
    return this.http.post<string>('http://localhost:8080/getInfoByVIN', { vin: vin });
  }
  /*
  connect(arg: Object) {
    return this.http.post<Object>(Const.serverAddress, arg);
  }
  */


}
