import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  endpoint = 'http://localhost:3000/usuarios';

  constructor(public http: HttpClient) { }

  public getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.endpoint)
  }
}
