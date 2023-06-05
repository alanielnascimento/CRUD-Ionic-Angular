import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailUsuarioPage } from './detail-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DetailUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailUsuarioPageRoutingModule {}
