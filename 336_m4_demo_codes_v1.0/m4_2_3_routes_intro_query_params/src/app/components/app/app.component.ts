import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'my-app',
  template :`
  <h1>Root App</h1>
  <a routerLink="/">Home</a>
  <a routerLink="/about/test">About</a>
  <a routerLink='/about/training'>About - Training AngularJS</a>
  <a (click)="onClick()" href="">About - Training Angular2</a>
  <a routerLink="/contact">Contact Us</a>
  <a routerLink="/error">Error</a>
  <br>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private router: Router){}
  onClick(){
    this.router.navigate(['/about','training',{name:'test'}]);
    return false;
  }
}