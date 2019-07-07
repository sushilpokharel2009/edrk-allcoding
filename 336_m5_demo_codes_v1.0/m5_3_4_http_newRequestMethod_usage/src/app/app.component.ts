import { Component } from '@angular/core';
import {Http, Request, Response, RequestMethod, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Component({
  selector: 'my-app',
  template: `<h1>HTTP Request - new Request() method</h1>
  {{respData}}
  `,
})
export class AppComponent  {
  respData: any;
  constructor(private http: Http){
    let url = '../../../app/cities.json';
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let method: any = 'GET';
    let methods: any;
    let data: any = {
      data: ''
    };

    if (method === 'GET'){ methods = RequestMethod.Get;} 
    else if (method === 'POST'){ methods = RequestMethod.Post;}
    else if (method === 'PUT'){methods = RequestMethod.Put;}
    else if (method === 'PATCH'){methods = RequestMethod.Patch;} 
    else if (method === 'DELETE'){methods = RequestMethod.Delete;}
    else {methods = RequestMethod.Get;};

    this.http.request(new Request({
          method: methods,
          url: url,
          body: JSON.stringify(data),
          headers: headers
      })).map(res => res.json()).subscribe((res) => {
        console.log(res);
        this.respData = res.cities;
      });
  }

 }
