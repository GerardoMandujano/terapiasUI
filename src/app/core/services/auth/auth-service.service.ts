import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUrl = 'http://localhost:8080/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  // Devuelve un Observable en lugar de suscribirse dentro del servicio
  login(credentials: { username: string, password: string }): Observable<any> {
    return this.http.post<any>(this.authUrl, credentials).pipe(
      catchError((err) => {
        console.error('Error al iniciar', err);
        throw err;  
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('rol');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  getRoles(): string[] {
    return JSON.parse(localStorage.getItem('rol') || '[]');
  }
}
