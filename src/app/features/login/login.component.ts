import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    this.authService.login({ username: this.username, password: this.password })
      .subscribe({
        next: (response) => {
          const token = response.token;
          const rol = response.rol;

          localStorage.setItem('token', token);
          localStorage.setItem('rol', rol);

          // Redirección basada en el rol
          if (rol === 'admin') {
            this.router.navigate(['/usuarios']);
          } else {
            this.router.navigate(['/inicio']);
          }
        },
        error: () => {
          this.errorMessage = 'Credenciales inválidas.';
        }
      });
  }
}
