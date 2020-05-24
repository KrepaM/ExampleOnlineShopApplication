import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GlobalVariablesService } from 'src/services/global-variables.service';

@Injectable({
  providedIn: 'root',
})

export class ConnectionService {

  constructor(
    private http: HttpClient,
    private globalVariables: GlobalVariablesService
  ) { }

  getInfo(vin: string): Observable<any> {
    return this.http.post<string>('http://localhost:8080/getInfoByVIN', { vin: vin });
  }

  connect(endpoint: string, arg: Object) {
    return this.http.post<Object>(this.globalVariables.serverAddress + endpoint, arg);
  }

}
