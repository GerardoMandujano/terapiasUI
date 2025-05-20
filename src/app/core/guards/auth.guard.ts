import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {

    const token = localStorage.getItem('token');

    if (!token) {
      // Si no hay token, redirige a la página de login
      this.router.navigate(['/login']);
      return false;
    }

    const rolesFromToken = this.getRolesFromToken(token); // obtener roles desde el token
    const expectedRoles = route.data['rol'] as string[];  // obtener roles esperados

    // Si los roles coinciden con los roles esperados, permite el acceso
    if (expectedRoles && expectedRoles.some(role => rolesFromToken.includes(role))) {
      return true;
    }

    // Si no tiene acceso, redirige a la página de acceso denegado
    this.router.navigate(['/']);
    return false;
  }

  // Función para obtener los roles desde el token decodificado
  private getRolesFromToken(token: string | null): string[] {
    if (!token) return [];
    try {
      const payload = JSON.parse(atob(token.split('.')[1])); // decodificar el payload del JWT
      // Si el rol es una cadena, lo convertimos en un array para que sea compatible con la lógica
      return Array.isArray(payload.rol) ? payload.rol : [payload.rol]; 
    } catch (e) {
      console.error('Error al decodificar el token', e);
      return [];
    }
  }
}
