import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
/* , RouteData, RouteParams */
@Component({
  selector: 'candidates',
  template: `<div>Candidates Component</div>  
  <table>
        <thead>
            <th>Candidate name</th>
            <th>Age</th>              <th>Qualifications</th>
            <th>Delete</th>            </thead>
        <tbody>  
            <tr *ngFor="let candidate of candidates">
                <td>{{candidate.name}}</td>                     <td>{{candidate.age}}</td>
                <td>{{candidate.qualification}}</td>                     <td><a href="" (click)="delete(candidate)">Delete</a></td>
            </tr>
        </tbody>
    </table>
  `
})
export class CandidatesComponent {
    public candidates: any[] = [];
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/home'] );
      }
      if(this._userdetails.usertypeDetails() === 'user'){
          this._router.navigate( ['/users'] );
      }
  }  
  delete(candidate: any){
      let vari = this;      this._httpprovider.httpReq('http://localhost:9001/admin/deletecandidate','POST',candidate,null).subscribe((data)=>{
            vari.candidates = data;
        });
      return false;
  }
  ngOnInit(){
        let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/admin/candidates','GET',null,null).subscribe((data)=>{
            for (let i=0;i<data.length;i++){
            vari.candidates.push(data[i]);
            }
        });
    }
}
