import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-usuario',
  templateUrl: './update-usuario.page.html',
  styleUrls: ['./update-usuario.page.scss'],
})
export class UpdateUsuarioPage {

  usuario = {
    id: 0,
    nome: "",
    email: "",
    telefone: "",
    datanasc: "",
    avatar: ""
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
          avatar: "https://robohash.org/example.png"
        }
      }
    )
  }

  updateUsuario(){
    this.serv.atualizarUsuario(this.usuario).subscribe()
    this.router.navigateByUrl("/listar-usuario")
  }

}
