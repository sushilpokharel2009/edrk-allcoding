import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Edureka - Style and Class implementation</h1>
  <h3 [ngStyle]="{'font-size': styleStrExp}">This is test for Style</h3>
  <h3 [ngStyle]="{'font-size.px': stylePxExp}">This is test for Style</h3>
  <h3 [ngStyle]="{'font-size.em': styleEmExp}">This is test for Style</h3>
  <h3 [ngStyle]="styleObjExp">This is test for Style</h3>
  
  <br><br>
  <h3 [ngClass]="'red mysize'">This is test for Class</h3>
  <h3 [ngClass]="['red', 'mysize']">This is test for Class</h3>
  <h3 [ngClass]="{'red': true,  'mysize': false}">This is test for Class</h3>
  <h3 [ngClass]="classStringExp">This is test for Class</h3>
  <h3 [ngClass]="classArrayExp">This is test for ng Class</h3>
  <h3 [ngClass]="classObjExp">This is test for ng Class</h3>
  <h3 [ngClass]="{'red mysize' : true}">This is test for ngClass</h3>

  `,
  styles:[`
   .red{
     color: red;
   }
   .mysize{
     font-size: 15px;
   }
  `]
})
export class AppComponent  { 
  styleStrExp: any = '10px';
  stylePxExp: any = '12';
  styleEmExp: any = '1.5';
  styleObjExp: any = {'font-size': '10px'};

  classStringExp: any = 'red mysize';
  classArrayExp: any[] = ['red', 'mysize'];
  classObjExp: any = {'red': false,  'mysize': true};
 }
