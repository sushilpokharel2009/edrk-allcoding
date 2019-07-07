import { Component, Injectable, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
// some other operators
//import 'rxjs/add/operator/debounce';
//import 'rxjs/add/operator/mergeMap';
//import 'rxjs/add/operator/debounceTime';
//import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class httpservice {
  http:Http;
  constructor(http: Http){
    this.http = http;
  }
  getReq(){
    return this.http.get('../../app/cities.json')
    .map((val: any) => {
      console.log(val);
      // do your manipulations here
      return val.json();
    })
    .filter((value: any) => {
      // do your filtering here
      return value
    })

  }
}

@Component({
  selector: 'my-app',
  template: `Angular Component Using Observables!
  <form name="myForm">
    <input type="text" formControlName="ctrl"(keyup)="onKeyup()" />
  </form>
  
  `,
})
export class AppComponent implements OnInit  {
  cities: any[];
  ctrl: any;
  sub: any;
  constructor(private _httpservice: httpservice) {
    this.ctrl = new FormControl();

  }
  onKeyup() {
        this.sub.subscribe((data: any[]) => {
            // Update the linked list
            this.cities = data;
            console.log("Data from valueChanges", data);
          });
  }
  ngOnInit() {
    this._httpservice.getReq().subscribe((cities: any[]) => {
      console.log("Data from ngOnInit", cities);
      this.cities = cities;
    });
    this.sub = Observable.of(this.ctrl)
          .switchMap((value: string) => {
            // Get data according to the filled value
            return this._httpservice.getReq();
          })
  }
}
