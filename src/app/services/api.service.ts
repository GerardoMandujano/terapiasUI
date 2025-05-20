import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = ' http://localhost:8080/api/v1/'; // Asegúrate de que esta sea la URL correcta
  private readonly tokenKey = 'token';

  constructor(private http: HttpClient, private router: Router) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      // Si no hay token, redirigir al login
      this.router.navigate(['/login']);
      return new HttpHeaders(); // Devuelve encabezados vacíos si no hay token
    }
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  private handleError(error: any) {
    if (error.status === 401) {
      // Si el error es 401 (Unauthorized), redirigir al login
      this.router.navigate(['/login']);
    }
    console.error('Ocurrió un error:', error);
    return throwError(error); // Propaga el error
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl + 'usuario/', { headers: this.getHeaders() })
      .pipe(catchError(this.handleError.bind(this))); // Agrega el manejo de errores
  }

  buscarUsuariosPorNombre(nombre: string): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}buscar?nombre=${nombre}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError.bind(this))); // Agrega el manejo de errores
  }

  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${endpoint}`, data, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError.bind(this))); // Agrega el manejo de errores
  }

  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}${endpoint}`, data, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError.bind(this))); // Agrega el manejo de errores
  }

  deleteData(endpoint: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}${endpoint}`, { headers: this.getHeaders() })
      .pipe(catchError(this.handleError.bind(this))); // Agrega el manejo de errores
  }
}
