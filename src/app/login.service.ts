import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterfaceCredential} from "./user-interface";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url='https://127.0.0.1:8000/api/login_check'
  constructor(private http: HttpClient) { }

  login(credential:any){
    return this.http.post<UserInterfaceCredential>(this.url, credential);
  }
}
