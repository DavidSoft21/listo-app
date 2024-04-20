import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';

@Injectable({
  providedIn: 'root'
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    // Emitir el evento cambiarFondo al cargar la ruta de login
    DashboardComponent.updateBackground.emit(false);
    return true;
  }
}
