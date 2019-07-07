import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {Httpprovider} from '../../services/httpprovider';
import {Userdetails} from '../../services/userdetails';


@Component({
  selector: 'admin',
  template:` 
      <span style="text-align:center"><h1>Admin Dashboard</h1>
      <a routerLink="approve">Approvals</a> | 
      <a routerLink='candidates'>Candidates</a> | 
      <a routerLink="addcandidate">Add Candidates</a> |   
      <a routerLink="adminresults">Admin Results</a>
      <hr><br>
    <router-outlet></router-outlet></span>
  `
})

export class AdminComponent{
    constructor(private _userdetails: Userdetails, private _router: Router){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/home'] );
      }
      if(this._userdetails.usertypeDetails() === 'user'){
          this._router.navigate(['/users']);
      }
  }
}
