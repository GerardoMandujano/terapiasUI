import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ResumenComponent } from './resumen/resumen.component';
import { GraficosComponent } from './graficos/graficos.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'resumen', component: ResumenComponent },
      { path: 'graficos', component: GraficosComponent },
      { path: '', redirectTo: 'resumen', pathMatch: 'full' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
