import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a class="btn-click" routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a class="btn-click" routerLink="/employees" routerLinkActive="active">Employees</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'EMPLOYEE MANAGEMENT';
}
