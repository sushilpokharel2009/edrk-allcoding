import { Component } from '@angular/core';
import {FormControl, FormControlName} from '@angular/forms';

@Component({
  selector: 'my-app',
  template: `
  <h1>ngSelectOption</h1>
  <select ngControl="city">
  <option *ngFor="let c of cities" [value]="c">{{c}}</option>
  </select>
  `,
})
export class AppComponent  { 
  // Marks <option> as dynamic, so Angular can be notified when options change.
  cities: any = ['ny', 'ca', 'ln', 'sg', 'mum'];
  city: FormControl = new FormControl('');
 }
