import { Component } from '@angular/core';

@Component({
  selector: 'team',
  template :`
  <h1>Team Details</h1>
  <a routerLink="/team">Team</a> | 
  <a routerLink="/team/test">Team Home</a> | 
  <a routerLink="/team/item">Team Items</a>
  <br>
  <router-outlet></router-outlet>
  `
})
export class TeamComponent {
}