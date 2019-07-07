import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {ValuesPipe} from '../../../client/pipes/mappipe';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
//import 'rxjs/Rx';
/* , RouteData, RouteParams */
@Component({
  selector: 'results',
  template: `<div>Results Component</div>
  <table>
        <thead>
            <th>Candidate Name</th>
            <th>Total Votes</th>
        </thead>
        <tbody>
            <tr *ngFor="let value of a">
            <td>{{value}}</td> 
            <td>{{votecount[value]}}</td>
            <tr>
        </tbody>
    </table>
  `
})
export class ResultsComponent {
public votecount: any[] = [];
public a: any;
    constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
        if ((this._userdetails.usertypeDetails() === "") || (this._userdetails.isLoggedin() === false)){
            this._userdetails.resetDetails();
            this._router.navigate(['/home']);
        }        
    }
ngOnInit(){
        let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/users/results','GET',null,null).subscribe((data)=>{
            console.log(data);
            let a = this._userdetails.returnArray(data);
            vari.votecount = a;
            vari.a = Object.keys(a).map(key => {return key});
        });
    }
}
