import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IToken, UserInterfaceCredential} from "./user-interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://127.0.0.1:8000/api/login_check'
  constructor(private http: HttpClient) { }

  login(credential:any): Observable<IToken>{
    return this.http.post<IToken>(this.url, credential);
  }
}
