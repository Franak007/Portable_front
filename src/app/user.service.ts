import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserInterface} from "./user-interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<UserInterface[]>('https://127.0.0.1:8000/api/users');
  }
}
