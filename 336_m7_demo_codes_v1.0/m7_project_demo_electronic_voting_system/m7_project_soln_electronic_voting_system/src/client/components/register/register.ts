import {Component} from '@angular/core';
import {Router,  RouterLink} from '@angular/router';
import {Httpprovider} from '../../services/httpprovider';
import {Userdetails} from '../../services/userdetails';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
/* , RouteData, RouteParams */
@Component({
  selector: 'register',
  template: `
  <span style="text-align:center">
  <div>Register</div><br>
    <form (ngSubmit)="register(user)">    
      <input type="text" [(ngModel)]="user.username" [ngModelOptions]="{standalone: true}" size="20" placeholder="new username"><br><br>
      <input type="password" [(ngModel)]="user.password" [ngModelOptions]="{standalone: true}" size="20" placeholder="new password"><br><br>
      <input type="submit" value="Register">
    </form>
  </span>
  `
})
export class RegisterComponent{
  public user: any = {username:"",password:""};
  constructor(private _userdetails: Userdetails, private _httpprovider: Httpprovider, private _router: Router){
      this._userdetails.resetDetails();
  }
  register(user: any){
      let vari = this;
      this._httpprovider.httpReq('http://127.0.0.1:9001/register','POST',{username:user.username, password:user.password},null).subscribe((data)=>{                     
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
