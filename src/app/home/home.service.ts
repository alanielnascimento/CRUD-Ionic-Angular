import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  endpoint = 'http://localhost:3000/usuarios';

  constructor(public http: HttpClient) { }

  public getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.endpoint)
  }

  createUser(u: Usuarios): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post(this.endpoint,JSON.stringify(u),httpOptions)
  }

  deleteUser(id: number): Observable<any>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.delete(this.endpoint+"/"+id);
  }

  public updateUser(id: number, u: Usuarios): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(this.endpoint+"/"+id, JSON.stringify(u),httpOptions);
  }
}

