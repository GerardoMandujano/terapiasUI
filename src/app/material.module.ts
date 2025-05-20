import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';  // Botones
import { MatInputModule } from '@angular/material/input';    // Campos de entrada
import { MatCardModule } from '@angular/material/card';      // Tarjetas
import { MatToolbarModule } from '@angular/material/toolbar'; // Barra de herramientas
import { MatIconModule } from '@angular/material/icon';       // Iconos
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSelectModule,
    
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    MatMenuModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSelectModule
    
  ]
})
export class MaterialModule { }
