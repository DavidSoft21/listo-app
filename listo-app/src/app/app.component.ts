import { Component } from '@angular/core';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'listo-app';
  isBackground: boolean = true;

  ngOnInit() {
    LoginComponent.updateBackground.subscribe((isBackground: boolean) => {
      this.isBackground = isBackground;
    });
    DashboardComponent.updateBackground.subscribe((isBackground: boolean) => {
      this.isBackground = isBackground;
    });
  }
}
