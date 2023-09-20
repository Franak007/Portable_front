import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PortableInterface} from "./portable-interface";

@Injectable({
  providedIn: 'root'
})
export class PortableService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<PortableInterface[]>{
    return this.http.get<PortableInterface[]>("https://127.0.0.1:8000/api/names");
      }

  addPortable(portable: PortableInterface){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(portable);
    console.log(portable);
    return this.http.post<PortableInterface>('https://127.0.0.1:8000/api/names', body,
      {'headers' : headers});
  }

  deletePortable(id:number){
    return this.http.delete<PortableInterface>('https://127.0.0.1:8000/api/names/'+id);
  }
}
