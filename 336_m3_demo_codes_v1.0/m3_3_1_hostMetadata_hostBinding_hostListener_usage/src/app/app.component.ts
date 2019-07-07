import { Component, Directive, HostListener, ElementRef, HostBinding, ContentChild } from '@angular/core';

@Directive({
    selector: '.c_highlight'
 })
export class HostDirective {

  // we could pass lots of thing to the HostBinding function. 
  // like class.valid or attr.required etc.
  
  @HostBinding('style.backgroundColor') colorBg = "green";

  // another usage @HostBinding('class.fixed-thing')

  @HostListener('mouseenter') c_onEnterrr() {
    this.colorBg = "blue";
  }
  @HostListener('click') c_onclick() {
    this.colorBg = "red";
  }
}
@Component({
  selector: 'my-app',
  template: `
  <h1>{{name}}</h1>
  <div>
  <span>Outside</span>
  <span>
    <h1>This is a test</h1>
      <child-app >
        <span class="c_highlight">Some text - Click here</span>
      </child-app>
    <h1>This is a test</h1>
  </span>
  <span>Outside</span>
  </div>
  
  `,
})
export class AppComponent  { 
  name = 'host component metadata, HostBinding, and HostListener';
 }

@Component({
  selector: 'child-app',
  template: `
  <h1>{{childTitle}} App Component</h1>
  <ng-content></ng-content>`,
  host:{
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class ChildComponent  {
  childTitle: string = 'Child';
  @ContentChild('span') tag: ElementRef;
  @HostListener('click') click() {
   console.log('Testing events capture - Click');
  }
  onMouseEnter(){
    console.log('Testing events capture - Mouse Enter');
  }
  onMouseLeave(){
    console.log('Testing events capture - Mouse Leave');
  }
 }
