import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/services/server-communication.service';
import { ConstModule } from 'src/modules/const.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  constructor(
    private connectionService: ConnectionService,
    private consts: ConstModule
  ) { };

  title: String = "ABC";

  ngOnInit(): void {
    // this.title = this.consts.serverAddress;
  }
}
