import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './feature/pages/inicio/inicio.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';

const routes: Routes = [
  // Redirección por defecto
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./features/login/login.module').then(m => m.LoginModule),
      },
    ],
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./features/usuarios/usuarios.module').then(m => m.UsuariosModule),
      },
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'unauthorized',
        loadComponent: () =>
          import('./features/unauthorized/unauthorized.component').then(m => m.UnauthorizedComponent),
      },
    ],
  },
  // Ruta wildcard para manejar URLs no válidas
  {
    path: '**',
    redirectTo: '/unauthorized',
  },
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
