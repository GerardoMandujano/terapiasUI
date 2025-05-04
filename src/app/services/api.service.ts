import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // URL base de tu API (reemplázala con la URL real de tu backend)
  private apiUrl = 'http://localhost:8080/api/v1/usuario/'; 

  constructor(private http: HttpClient) { }

  // Método GET para obtener datos
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  buscarUsuariosPorNombre(nombre: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl+'usuario?nombre='+nombre);
  }

  

  // Método POST para enviar datos
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, data);
  }

  // Método PUT para actualizar datos
  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${endpoint}`, data);
  }

  // Método DELETE para eliminar datos
  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}`);
  }
}
