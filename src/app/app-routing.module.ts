import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: 'usuarios', loadChildren: () => import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule) },
   { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule) },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  
  { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) }  // Redirige al login por defecto

  
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
