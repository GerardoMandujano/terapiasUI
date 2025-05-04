import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ResumenComponent } from './resumen/resumen.component';
import { GraficosComponent } from './graficos/graficos.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    ResumenComponent,
    GraficosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
