export interface Usuario {
    id: number;
    nombre: string;
    correo: string;
    contraseña: string;
    rol: 'CLIENTE' | 'ADMIN' | 'USUARIO' | string; // Puedes personalizar los roles
    activo: boolean;
    fechaCreacion: string | null;
    fechaModificacion: string | null;
  }
  export enum Rol {
    CLIENTE = 'CLIENTE',
    ADMIN = 'ADMIN',
    USUARIO = 'USUARIO'
  }
  