import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar-usuario',
    pathMatch: 'full'
  },
  {
    path: 'listar-usuario',
    loadChildren: () => import('./listar-usuario/listar-usuario.module').then( m => m.ListarUsuarioPageModule)
  },
  {
    path: 'add-usuario',
    loadChildren: () => import('./add-usuario/add-usuario.module').then( m => m.AddUsuarioPageModule)
  },
  {
    path: 'update-usuario/:id',
    loadChildren: () => import('./update-usuario/update-usuario.module').then( m => m.UpdateUsuarioPageModule)
  },
  {
    path: 'detail-usuario/:id',
    loadChildren: () => import('./detail-usuario/detail-usuario.module').then( m => m.DetailUsuarioPageModule)
  },
  {
    path: 'delete-usuario/:id',
    loadChildren: () => import('./delete-usuario/delete-usuario.module').then( m => m.DeleteUsuarioPageModule)
  },
  {
    path: 'detail-usuario',
    loadChildren: () => import('./detail-usuario/detail-usuario.module').then( m => m.DetailUsuarioPageModule)
  },
  {
    path: 'update-usuario',
    loadChildren: () => import('./update-usuario/update-usuario.module').then( m => m.UpdateUsuarioPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
