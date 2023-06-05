import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-usuario',
  templateUrl: './delete-usuario.page.html',
  styleUrls: ['./delete-usuario.page.scss'],
})
export class DeleteUsuarioPage {

  usuario = {
    id: 0,
    nome: "",
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
          telefone: resp[0].telefone,
          datanasc: resp[0].datanasc,
          avatar: resp[0].avatar
        }
      }
    )
  }

  deleteUsuario(){
    this.serv.removerUsuario(this.usuario).subscribe()
    this.router.navigateByUrl("/listar-usuario")
  }

}
