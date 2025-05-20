import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsuariosComponent,
    ListaUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class UsuariosModule { }
