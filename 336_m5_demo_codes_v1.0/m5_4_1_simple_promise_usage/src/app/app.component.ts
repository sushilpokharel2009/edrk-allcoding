import { Component, Injectable } from '@angular/core';

var DEVELOPERS = 'DEVELOPERS';

@Injectable()
export class MyPromise {
  developers: any;
  triggerMockGetRequest () {
    this.developers = Promise.resolve(DEVELOPERS);
    return this.developers;
  }
  goodPromiseUsage () {
    let myFirstPromise = new Promise((resolve, reject) => {

        // call resolve(...) when what we were doing async succeeded, 
        // and reject(...) when it failed.
        // Use appropriate callback functions to trigger success or failure
        // .then(successcallback, failurecallback)

        setTimeout(function(){
            resolve("Success!");
        }, 250);

        // Trigger below for failure
        /*
        setTimeout(function(){
            reject("Did you mess around with code!"); 
        }, 1500);
        */
    });
    return myFirstPromise;
  }
}

@Component({
  selector: 'my-app',
  template: `
  <h1>Simple Promises</h1>
  {{developerName}}
  <br>
  {{goodPromiseResult}}
  `,
})
export class AppComponent  {
  developerName: string;
  goodPromiseResult: string;
  constructor(private _mypromise: MyPromise) {
    this._mypromise.triggerMockGetRequest().then((developers: any) => {
      this.developerName = developers;
    });
    this._mypromise.goodPromiseUsage().then((data: string) =>{
      this.goodPromiseResult = data;
    }, (data: string) => {
      this.goodPromiseResult = data;
    });
  }
 }
