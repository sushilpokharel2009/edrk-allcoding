import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'contact',
    template:`
    <h1>Contact Us</h1>
    <div>
      <h2>NgForm demo</h2>
      <p>Submit the form to see the data object Angular builds</p>
      <form (ngSubmit)="onSubmit(login)">
        <p>Frm1 Login: <br><input type="text" [(ngModel)]="login.user" [ngModelOptions]="{standalone: true}"></p>
        <p>Frm1 Password: <br><input type="password" [(ngModel)]="login.password" [ngModelOptions]="{standalone: true}"></p>
        <p>Frm2 Login: <br><input type="text" [(ngModel)]="login.name" [ngModelOptions]="{standalone: true}"></p>
        <p>Frm2 City: <br>
                <select [(ngModel)]="login.city" [ngModelOptions]="{standalone: true}">
                    <option *ngFor="let c of cities" [value]="c">{{c}}</option>
                </select>
          </p>  
        <button type="submit">Submit Form</button>
      </form>

      <!-- Works with RC4. Breaking in RC6 . Need to check implementation changes -->
      <!--
      <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
        <h3>Control group</h3>
        <div ngControlGroup="frm">
          <p>Frm1 Login: <br><input type="text" ngControl="login"></p>
          <p>Frm1 Password: <br><input type="password" ngControl="password"></p>
        </div>
        <div ngControlGroup="frm2">
          <p>Frm2 Login: <br><input type="text" ngControl="login2"></p>
          <p>Frm2 City: <br>
                <select ngControl="city">
                    <option *ngFor=" let c of cities" [value]="c">{{c}}</option>
                </select>
          </p>
        </div> 
        <button type="submit">Submit Form</button>
      </form>
        -->
      <p>Form data submitted:</p>
      <pre>{{data}}</pre>
  
      <pre>{{data | uppercase}} : Form Uppercase</pre>
      <pre>{{data | lowercase}} : Form Lowercase</pre>
      <pre>{{num | number:'3.3-7'}} :  minIntegerDigits . minFractionDigits - maxFractionDigits </pre>
      <pre>{{currDate | date}} : No format</pre>
      <pre>{{currDate | date:'medium'}} : Medium format : 'yMMMdjms'</pre>

    </div>
    `
})
export class ContactComponent implements OnInit {
    data: string;
    num: number = 3.123456789;
    currDate : any = Date.now();
    login:any = {};
    cities = ["KA","MH","TN","KR"];
    constructor() {};
    onSubmit(data: any) {
        console.log(data);
        this.data = JSON.stringify(data, null, 2);
    }
    ngOnInit() { }
}