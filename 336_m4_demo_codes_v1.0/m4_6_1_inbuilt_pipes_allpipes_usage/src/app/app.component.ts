import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Pipes - Direct Reference angular.io docs</h1>
  
  <h3>Percent Pipe</h3>
  <p>A: {{a | percent}}</p>
  <p>B: {{b | percent:'4.3-5'}}</p>

  <h3>Slice Pipe</h3>
  <ul>
    <li *ngFor="let i of collection | slice:1:3">{{i}}</li>
  </ul>
  <div>
    <p>{{spliceExample}}[0:4]: '{{spliceExample | slice:0:4}}' - output is expected to be 'abcd'</p>
    <p>{{spliceExample}}[4:0]: '{{spliceExample | slice:4:0}}' - output is expected to be ''</p>
    <p>{{spliceExample}}[-4]: '{{spliceExample | slice:-4}}' - output is expected to be 'ghij'</p>
    <p>{{spliceExample}}[-4:-2]: '{{spliceExample | slice:-4:-2}}' - output is expected to be 'gh'</p>
    <p>{{spliceExample}}[-100]: '{{spliceExample | slice:-100}}' - output is expected to be 'abcdefghij'</p>
    <p>{{spliceExample}}[100]: '{{spliceExample | slice:100}}' - output is expected to be ''</p>
  </div>

  <h3>JSON Pipe</h3>
  {{jsonObject | json}}

  <h3>Decimal Pipe</h3>
  <div>
    <p>eDec (no formatting): {{eDec}}</p>
    <p>e (3.1-5): {{eDec | number:'3.1-5'}}</p>
    <p>pi (no formatting): {{pi}}</p>
    <p>pi (3.5-5): {{pi | number:'3.5-5'}}</p>
  </div>

  <h3>Currency Pipe</h3>
  <div>
    <p>A: {{a | currency:'USD':false}}</p>
    <p>B: {{b | currency:'USD':true:'4.2-2'}}</p>
  </div>

  <h3>Date Pipe</h3>
  {{dateFormat | date:'y/M/d - j:m:s'}}
  `,
})
export class AppComponent  { 
  a: number = 0.259;
  b: number = 1.3495;

  collection: string[] = ['a', 'b', 'c', 'd'];
  spliceExample: string = 'abcdefghij';

  jsonObject: any = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};

  pi: number = 3.141592;
  eDec: number = 2.12345678987654321;

  dateFormat: any = new Date();
 }
