import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginComponent } from '../../auth/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Emitir el evento cambiarFondo al cargar la ruta de login
    LoginComponent.updateBackground.emit(true);
    return true;
  }
}
