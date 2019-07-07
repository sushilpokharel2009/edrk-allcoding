import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { Http, Response, Request,RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Httpprovider} from '../../services/httpprovider';
import {Userdetails} from '../../services/userdetails';
/* , RouteData, RouteParams */
@Component({
  selector: 'login',
  template: `
  <span style="text-align:center">
  <div>Login</div><br>
    <form (ngSubmit)="login(user)">
      <input type="text" [(ngModel)]="user.username" [ngModelOptions]="{standalone: true}" size="20" placeholder="username"><br><br>
      <input type="password" [(ngModel)]="user.password" [ngModelOptions]="{standalone: true}" size="20" placeholder="password"><br><br>
      <input class="btn-primary" type="submit" value="Submit">
    </form>
  </span>
  `
})
export class LoginComponent {
  public user: any = {username:"",password:""};
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router){
      if((this._userdetails.isLoggedin()) || (this._userdetails.usertypeDetails() !== null)){
          if(this._userdetails.usertypeDetails() === "user" ||this._userdetails.usertypeDetails() === "admin"){
                this._userdetails.resetDetails();
                this._router.navigate( ['/home'] );
          }
      }
  } 
  login(user: any){
      this._httpprovider.httpReq('http://127.0.0.1:9001/userlogin','POST',{username:user.username, password:user.password},null).subscribe((data)=>{                     
            let vari = this;
            if (data.username !== null || data.username !== undefined || data.usertype !== null || data.usertype !== undefined){
                vari._userdetails.setDetails(data);
                if (vari._userdetails.usertypeDetails() === 'admin'){vari._router.navigate( ['/admin'] );}
                else if (vari._userdetails.usertypeDetails() === 'user'){vari._router.navigate( ['/users'] );}
                else{console.log("Error Occurred during Login.");}
                
            }else {
                console.log("Error Occurred during Login. No username or usertype present.");
            }
            
        });
  }
}
