import {Injectable} from '@angular/core';

export interface userdetails{
    userid: string;
    username: string;
    password: string;
    usertype: string;
    approved: string;
    loggedin: boolean;
}
@Injectable()
export class Userdetails implements userdetails {
    public userid: string = null;
    public  username: string = null;
    public  password: string = null;
    public  usertype: string = null;
    public  approved: string = null;
    public  loggedin: boolean = false;    
    constructor(){}
    isLoggedin(){     return this.loggedin;      }
    isApproved(){   return this.approved;         }
    usertypeDetails(){    return this.usertype;     }
    hasUsername(){      return this.username;     }
    getUserdetails(){
        return {userid: this.userid, username: this.username, password: this.password, usertype: this.usertype, approved: this.approved, loggedin: this.loggedin};
    }
    resetDetails(){
        this.username = null; this.password = null;
        this.usertype = null; this.approved = null;
        this.loggedin = false; this.userid = null; 
    }
    setDetails(data: any){
        this.userid = data._id; this.username = data.username; this.password = null;
        this.usertype = data.usertype; this.approved = data.approved;
        this.loggedin = true; 
    }
    returnArray(data: any){
        let iter = data.length;
        let variresArray= [];
            for (var i=0;i<iter;i++){
                variresArray.push(data[i].candidatename);
            }
            let a = variresArray.reduce(function (acc, curr) {
            if (typeof acc[curr] === 'undefined') {
            acc[curr] = 1;
            } else {
            acc[curr] += 1;
            }
            return acc;
            }, {});
        return a;
    }
}
