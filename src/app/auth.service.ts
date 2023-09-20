import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route: Router) { }

  saveToken(token:string){
    localStorage.setItem('token', token);
    this.route.navigate(['/portable']);
  }

  isLogged(): boolean{
    const token = localStorage.getItem('token');
    console.log(token);
    return !! token //renvoie "true" on a un token, et false si "vide", ou "nul", ou "undefined"
  }

  clearToken(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token')
  }
}
