import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          const token = response.token;
          const rol = response.rol;

          localStorage.setItem('token', token);
          localStorage.setItem('rol', rol);
          const decoded: any = this.decodeToken(token);
          this.router.navigate(['/usuarios']);
          
        },
        error: (err) => {
          this.errorMessage = 'Credenciales inválidas.';
          this.router.navigate(['/']);
        }
      });
  }

  private decodeToken(token: string): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return {};
    }
  }
}
