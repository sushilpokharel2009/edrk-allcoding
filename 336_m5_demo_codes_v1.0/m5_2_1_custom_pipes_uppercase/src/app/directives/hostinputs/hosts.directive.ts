import {Directive} from '@angular/core';

@Directive({
  selector: '[demodir]',
  inputs: [
    'text: demodir'
  ],
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
    '(click)':'onClick()'
  }
})
 
export class Demodir{
  text:string;
  constructor() {}
  onMouseEnter() {
    console.log(this.text);  
    this.text = "Testing Mouse in";
    console.log(this.text);
  }
  onMouseLeave() {
    this.text = "Testing Mouse Out";
    console.log(this.text);
  }
  onClick() {
    this.text = "Testing Mouse Click";
    console.log(this.text);
  }
}