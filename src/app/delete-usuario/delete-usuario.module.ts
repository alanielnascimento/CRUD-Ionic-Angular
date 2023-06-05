import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteUsuarioPageRoutingModule } from './delete-usuario-routing.module';

import { DeleteUsuarioPage } from './delete-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteUsuarioPageRoutingModule
  ],
  declarations: [DeleteUsuarioPage]
})
export class DeleteUsuarioPageModule {}
