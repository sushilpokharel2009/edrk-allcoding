import {Component} from '@angular/core';
import {Router} from '@angular/router';
/* , RouteData, RouteParams */
import {Httpprovider} from '../../../client/services/httpprovider';
import {Userdetails} from '../../../client/services/userdetails';
import { Http, Response, Request,RequestMethod, Headers} from '@angular/http';

@Component({
  selector: 'approve',
  template: `<div>Approve Component</div>
    <table>
        <thead>
            <th>Username</th>
            <th>Name</th>
            <th>Age</th>
            <th>Identification</th>
            <th>Approved?</th>
        </thead>
        <tbody>
            <tr *ngFor="let approval of approvallist">
                <td>{{approval.username}}</td>
                <td>{{approval.name}}</td>
                <td>{{approval.age}}</td>
                <td>{{approval.identification}}</td>
                <td>{{approval.approved}}</td>
                <td><a href="" (click)="approve(approval)">Approve</a></td>
                <td><a href="" (click)="reject(approval)">Reject</a></td>                
            </tr>
        </tbody>
    </table>
  `
})
export class ApproveComponent {
  public approvallist: any[] = [];
  constructor(private _userdetails: Userdetails, private _router: Router,  private _httpprovider: Httpprovider){
      if (this._userdetails.usertypeDetails() === "" || this._userdetails.isLoggedin() === false){
          this._router.navigate( ['/home'] );
      }
      if(this._userdetails.usertypeDetails() === 'user'){
          this._router.navigate( ['/users'] );
      }
  }  
  approve(approval: any){
      let vari = this;      this._httpprovider.httpReq('http://localhost:9001/admin/approvevoter','POST',approval,null).subscribe((data)=>{
          if (data !== "Approval not in list"){
            for (var n = 0 ; n < vari.approvallist.length ; n++) {
                if (vari.approvallist[n]._id === approval._id) {
                var removedObject = vari.approvallist.splice(n,1);
                removedObject = null;
                break;
                }
            }
          }
      });
      return false;
  }  
  reject(approval: any){
      let vari = this;
      console.log(approval);      this._httpprovider.httpReq('http://localhost:9001/admin/rejectvoter','POST',approval,null).subscribe((data)=>{
          if (data !== "Approval not in list"){
            for (var n = 0 ; n < vari.approvallist.length ; n++) {
                if (vari.approvallist[n]._id === approval._id) {
                var removedObject = vari.approvallist.splice(n,1);
                removedObject = null;
                break;
                }
            }
          }
      });
      return false;
  }  
  ngOnInit(){
        let vari = this;
        this._httpprovider.httpReq('http://localhost:9001/admin/approvallist','GET',null,null).subscribe((data)=>{
            for (let i=0;i<data.length;i++){
            vari.approvallist.push(data[i]);
            console.log(vari.approvallist);
            }
        });
    }  
}