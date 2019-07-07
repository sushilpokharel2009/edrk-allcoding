import { Component } from '@angular/core';
import {Http, Request, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
  <h1>HTTP GET, POST, PUT, PATCH, DELETE Demo</h1>
  {{getRes | json}}
  `,
})
export class AppComponent  {
  RequestOptionsArgs: any = {};
  getRes: any;
  constructor(private http: Http) {
      this.http = http;
      this.http.get('../../../app/cisites.json').map(res => res.json()).subscribe((res) => {
        console.log(res);
        this.getRes = res;
      });
    }
    doPost() {
      this.http.post('../../../app/cisites.json', {data: ''}, this.RequestOptionsArgs).map(res => res.json()).subscribe((res) => {
        console.log(res);
      });
    }
    doPut() {
      this.http.put('../../../app/cisites.json', {data: ''}, this.RequestOptionsArgs).map(res => res.json()).subscribe((res) => {
        console.log(res);
      });
    }
    doPatch() {
      this.http.patch('../../../app/cisites.json', {data: ''}, this.RequestOptionsArgs).map(res => res.json()).subscribe((res) => {
        console.log(res);
      });
    }
    doDelete() {
      this.http.delete('../../../app/cisites.json', this.RequestOptionsArgs).map(res => res.json()).subscribe((res) => {
        console.log(res);
      });
    }
 }
