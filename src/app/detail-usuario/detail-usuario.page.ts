import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-detail-usuario',
  templateUrl: './detail-usuario.page.html',
  styleUrls: ['./detail-usuario.page.scss'],
})
export class DetailUsuarioPage {

  usuario = {
    id: 0,
    nome: "gatito",
    email: "gatito@gmail.com",
    telefone: 83991286839,
    datanasc: "02/05/2023",
    avatar: "https://avatars.githubusercontent.com/u/45?v=4"
  }

  serv: UserService;

  constructor(service: UserService, private router: Router) {
    this.serv = service
  }

  ionViewWillEnter(){
    this.getUsuarioByID(this.getIdFromURL())
  }

  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/", 3)
    let id = parseInt(arr[2])
    return id
  }

  getUsuarioByID(usuarioID:Number){
    this.serv.getUsuarioByID(usuarioID).subscribe(
      (resp:any) => {
        this.usuario = {
          id: resp[0].id,
          nome: resp[0].nome,
          email: resp[0].email,
          telefone: resp[0].telefone,
          datanasc: resp[0].datanasc,
          avatar: resp[0].avatar
        }
      }
    )
  }

}
