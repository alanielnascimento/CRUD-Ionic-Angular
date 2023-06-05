
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../model/usuarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUsuario } from '../Interfaces/iusuario';
import { IUsuarios } from '../Interfaces/iusuarios';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = 'http://localhost:3000/usuarios';

  constructor(public http: HttpClient) {
  }

  public getUsuarios(): Observable<Usuarios[]>{
    return this.http.get<Usuarios[]>(this.endpoint)
  }

  createUser(newUsuario: IUsuario): Observable<IUsuario>{
    let httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<IUsuario>(this.endpoint,JSON.stringify(newUsuario),httpOptions)
  }

  getUsuarioByID(id:Number): Observable<IUsuarios>{
    return this.http.get<IUsuarios>(`${this.endpoint}/?id=${id}`)
  }

  atualizarUsuario(usuario:any):Observable<IUsuarios>{
    return this.http.put<IUsuarios>(`${this.endpoint}/${usuario.id}`, usuario)
  }

  removerUsuario(usuario:any):Observable<IUsuarios>{
    return this.http.delete<IUsuarios>(`${this.endpoint}/${usuario.id}`)
  }
}
