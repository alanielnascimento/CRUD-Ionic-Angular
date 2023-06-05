import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { IUsuario } from '../Interfaces/iusuario';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.page.html',
  styleUrls: ['./add-usuario.page.scss'],
})
export class AddUsuarioPage implements OnInit {

  newUsuario:IUsuario = {
    nome: "",
    email: "",
    telefone: "",
    datanasc: "",
    avatar: "https://ionicframework.com/docs/img/demos/avatar.svg"
  }

  usuarios = new Array<Usuarios>();
  serv: UserService;

  constructor(service: UserService, private router: Router) {
    this.serv = service
    service.getUsuarios().subscribe(response => (this.usuarios = response))
  }

  ngOnInit() {
  }

  onClickPost() {
    this.serv.createUser(this.newUsuario).subscribe(response => {
      this.newUsuario=response;
      this.router.navigateByUrl("/listar-usuario")
      this.serv.getUsuarios().subscribe(response => (this.usuarios = response))
    })
  }

}
