import {Component,  OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
/* , RouteData, RouteParams */
@Component({
  selector: 'vote',
  template: `<div>Vote Component</div>
  <div>
    <table>
        <thead>
            <th>Candidate name</th>
            <th>Age</th>
            <th>Qualifications</th>
            <th>Vote</th>
        </thead>
        <tbody>
            <tr *ngFor="let candidate of candidates">
                <td>{{candidate.name}}</td>
                <td>{{candidate.age}}</td>
                <td>{{candidate.qualification}}</td>
                <td><a href="" style="text-decoration: underline;" (click)="vote({candidateid: candidate._id, candidatename: candidate.name,username: _userdetails.username, userid: _userdetails.userid})">Vote</a></td>
            </tr>
        </tbody>
    </table>
    <div>You voted for {{votedfor.candidateid}} - {{votedfor.candidatename}}</div>
</div>
`
})
export class VoteComponent {
    public candidates: any[]=[];
    public votedfor: any = {candidateid: null, candidatename: null};
    constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
        if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
            this._router.navigate( ['/home'] );
        }
        if(this._userdetails.usertypeDetails() === 'admin'){
            this._router.navigate( ['/admin'] );
        }        
    }
    vote(datas: any){
        let vari = this;
this._httpprovider.httpReq('http://localhost:9001/users/vote','POST',datas,null).subscribe((data)=>{
            console.log(data);
            if (data.candidateid && data.candidatename){
                vari.votedfor = {candidateid: data.candidateid,candidatename:data.candidatename};
                console.log(data);
            }else{
                console.log("Already voted. Cannot vote again");
            }
        });
        return false;
    }
    ngOnInit(){
        let vari = this;        this._httpprovider.httpReq('http://localhost:9001/users/candidates','GET',null,null).subscribe((data)=>{
            for (let i=0;i<data.length;i++){
            vari.candidates.push(data[i]);
            }
        });        this._httpprovider.httpReq('http://localhost:9001/users/votedfor','POST',{username:this._userdetails.hasUsername()},null).subscribe((data)=>{
            if (data !== "Not yet Voted"){vari.votedfor = {candidateid: data.candidateid,candidatename:data.candidatename};}  
        });
    }    
}
