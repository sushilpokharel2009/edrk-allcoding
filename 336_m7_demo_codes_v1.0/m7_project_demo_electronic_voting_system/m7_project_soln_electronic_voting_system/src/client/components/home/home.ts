import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {Userdetails} from '../../../client/services/userdetails';
/* , RouteData, RouteParams */
@Component({
  selector: 'home',
  template: `<div>Home Component</div>`,
})
export class HomeComponent {
  constructor(private _userdetails: Userdetails, private _router: Router){
      this._userdetails.resetDetails();
      this._router.navigate( ['/login'] );
  }
}
