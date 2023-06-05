import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeleteUsuarioPage } from './delete-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: DeleteUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeleteUsuarioPageRoutingModule {}
