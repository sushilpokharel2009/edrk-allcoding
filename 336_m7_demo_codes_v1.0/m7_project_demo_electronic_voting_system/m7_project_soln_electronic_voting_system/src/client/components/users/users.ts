import {Component} from '@angular/core';
import {Router,  RouterLink} from '@angular/router';
import {Userdetails} from '../../services/userdetails';

@Component({
  selector: 'users',
  template:` 
      <span style="text-align:center"><h1>Users Dashboard</h1>
      <a routerLink="vote">Vote</a> |
      <a routerLink="getapproval">Get Approval</a> | 
      <a routerLink="userresults">Results</a>
      <hr><br>
    <router-outlet></router-outlet></span>
  `
})
export class UsersComponent{
    constructor(private _userdetails: Userdetails, private _router: Router){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/home'] );
      }
      if(this._userdetails.usertypeDetails() === 'admin'){
          this._router.navigate( ['/admin'] );
      }
  }
}