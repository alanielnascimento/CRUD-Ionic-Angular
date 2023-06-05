import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { response } from 'express';
import { Usuarios } from '../model/usuarios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuarios = new Array<Usuarios>();
  serv: HomeService;

  constructor(service: HomeService) {
    this.serv = service
    service.getUsuarios().subscribe(response => (this.usuarios = response))
  }

  onClickPost(){
    let proximoId = this.usuarios.length+1;
    let u = new Usuarios(proximoId,"Alexandre Juan Daniel de Paula ", 83981248689, "21/01/1994", "https://avatars.githubusercontent.com/u/45?v=4"+proximoId);
    this.serv.createUser(u).subscribe(response=>{
      u=response;
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response))
    })
  }

  onClickDelete(){
    let id = this.usuarios.length;

    this.serv.deleteUser(id).subscribe(resposnse=>{
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response));
    });
  }

  onClickUpdate(){
    let id = this.usuarios.length-1;
    let u = new Usuarios(id, "Jorge Henrique Cavalcanti", 83992926412, "08/01/1993", "https://avatars.githubusercontent.com/u/46?v=4");

    this.serv.updateUser(id, u).subscribe(response => {
      u=response;
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response));
    });
  }

}
