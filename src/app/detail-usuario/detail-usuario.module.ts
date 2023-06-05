import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailUsuarioPageRoutingModule } from './detail-usuario-routing.module';

import { DetailUsuarioPage } from './detail-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailUsuarioPageRoutingModule
  ],
  declarations: [DetailUsuarioPage]
})
export class DetailUsuarioPageModule {}
