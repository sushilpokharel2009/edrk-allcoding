import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import {Http, Response, Request,RequestMethod, Headers} from '@angular/http';
@Component({
  selector: 'addcandidate',
  template: `<div>Add Candidates Component</div>
  <span style="text-align:center">
    <form (ngSubmit)="submit(candidat)">
            <br>
            <input type="text" [(ngModel)]="candidat.name" [ngModelOptions]="{standalone: true}" placeholder="Name"/>
            <br><br>
            <input type="text" [(ngModel)]="candidat.age" [ngModelOptions]="{standalone: true}" placeholder="Age"/>   
            <br><br>
            <input type="text" [(ngModel)]="candidat.qualification" [ngModelOptions]="{standalone: true}" placeholder="Qualification"/>             
            <br><br>
            <button type="submit">Submit</button>
        </form>
    <!--<div>Data Added: Name - {{resCandidate.name}}, Age - {{resCandidate.age}}, Qualification - {{resCandidate.qualification}}</div>-->
    </span>
  `
})
export class AddcandidateComponent {
    public candidat: any = {name: null, age: null, qualification: null};
    public resCandidate: any =  {name: null, age: null, qualification: null};
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/home'] );
      }
      if(this._userdetails.usertypeDetails() === 'user'){
          this._router.navigate( ['/users'] );
      }
  }

  submit(candidat: any){
      let vari = this;
this._httpprovider.httpReq('http://localhost:9001/admin/addcandidate','POST',candidat,null).subscribe((data)=>{
            console.log(data);
            vari.resCandidate = data;
            vari.candidat = {name: null, age: null, qualification: null}
            this._router.navigate( ['/admin/candidates'] );
      });
  }  
}