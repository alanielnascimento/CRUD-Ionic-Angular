import { Component, OnInit } from '@angular/core';
import { Usuarios } from '../model/usuarios';
import { UserService } from '../service/user.service';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.page.html',
  styleUrls: ['./listar-usuario.page.scss'],
})
export class ListarUsuarioPage {

  usuarios = new Array<Usuarios>();
  serv: UserService;

  constructor(service: UserService, private loadingCtrl: LoadingController) {
    this.serv = service
    // service.getUsuarios().subscribe(response => (this.usuarios = response))
  }

  ionViewWillEnter(){
    this.loadUsuarios()
  }

  async loadUsuarios(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: "Carregando...",
      spinner: "bubbles"
    })
    await loading.present();

    this.serv.getUsuarios().subscribe(
      (resp) => {
        loading.dismiss();
        let listString = JSON.stringify(resp)
        this.usuarios = JSON.parse(listString)
        event?.target.complete()
      },
      (err) => {
        console.log(err.message)
        loading.dismiss();
      }
    )
  }

}
