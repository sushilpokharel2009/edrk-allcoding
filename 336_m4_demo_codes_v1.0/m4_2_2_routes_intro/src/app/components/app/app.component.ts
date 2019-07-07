import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template :`
  <h1>Root App</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/about">About</a>
  <a routerLink="/contact">Contact Us</a>
  <a routerLink="/error">Error</a>
  <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent { }