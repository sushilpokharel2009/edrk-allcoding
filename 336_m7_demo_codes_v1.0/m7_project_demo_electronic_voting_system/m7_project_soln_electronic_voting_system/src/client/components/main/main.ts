import {Component} from '@angular/core';

@Component({
  selector: 'main-app',
  template:` 
      <span style="text-align:center!important"><h1>Electronic Voting System - Sample Project</h1>
      <a routerLink="/home">Home</a> |
      <a routerLink="/login">Login / Logout</a> | 
      <a routerLink="/register">Register</a>
      <hr><br>
    <router-outlet></router-outlet></span>
  `
})

export class MainComponent{
}