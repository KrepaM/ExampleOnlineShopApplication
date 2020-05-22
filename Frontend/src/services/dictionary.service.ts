import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DictionaryService {

  // Variables
  activeLanguage: string = "PL";
  languageIndex = 0;
  dictionaries = [
    {
      lang: "PL",
      keys: [
        "LOGIN_LABEL",
        "LOGOUT_LABEL"
      ],
      values: {
        LOGIN_LABEL: "Zaloguj",
        LOGOUT_LABEL: "Wyloguj"
      }
    }
  ];


  // Services
  translate(value: string): string {
    return this.dictionaries[this.languageIndex].values[value];
  }

}
