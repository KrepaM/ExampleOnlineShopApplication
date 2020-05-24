import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionService } from 'src/services/server-communication.service';
import { ConstModule } from 'src/modules/const.module';
import { LoginFormComponent } from 'src/login-form/login-form.component';
import { GlobalVariablesService } from 'src/services/global-variables.service';
import { DictionaryService } from 'src/services/dictionary.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ConstModule,
    FormsModule
  ],
  providers: [
    ConnectionService,
    GlobalVariablesService,
    DictionaryService],
  bootstrap: [
    AppComponent,
    LoginFormComponent
  ]
})
export class AppModule { }
