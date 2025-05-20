import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/models/Usuario';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent {
  usuarios: Usuario[] = [];
  cargando = false;
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'rol', 'activo'];
  dataSource: MatTableDataSource<Usuario> = new MatTableDataSource<Usuario>();
  nombreBuscado = '';
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private apiService: ApiService) {}

  
  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.apiService.getData().subscribe({
      next: (usuarios) => {
        this.dataSource = new MatTableDataSource<Usuario>(usuarios);
        this.dataSource.paginator = this.paginator;
      },
      error: (err) => {
        console.error('Error al obtener usuarios', err);
      }
    });
  }



  buscar(): void {
    if (!this.nombreBuscado.trim()) {
      this.cargarUsuarios(); // si el campo está vacío, carga todo
      return;
    }
  
    this.apiService.buscarUsuariosPorNombre(this.nombreBuscado).subscribe({
      next: (data) => {
        console.log('respuesta:', data);
  
        // Si data es un solo objeto (usuario), lo envolvemos en un array
        const usuarios = Array.isArray(data) ? data : [data];
  
        // Asignamos el array de usuarios a la fuente de datos de la tabla
        this.dataSource = new MatTableDataSource<Usuario>(usuarios);
  
        // Reasignamos el paginador a la fuente de datos
        this.dataSource.paginator = this.paginator;
  
        // Ocultamos el spinner después de cargar
      },
      error: (err) => {
        console.error('Error en búsqueda', err);
      }
    });
  }
}
