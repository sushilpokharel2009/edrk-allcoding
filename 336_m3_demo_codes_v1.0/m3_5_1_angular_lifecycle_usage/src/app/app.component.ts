import { Component, OnInit, AfterViewInit, AfterContentInit,  OnDestroy,  } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, OnDestroy  {
  name: any = 'Angular Lifecycle';
  constructor() {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('OnInit');
  }
  ngAfterViewInit() {
    console.log('AfterViewInit');
  }
  ngAfterContentInit() {
    console.log('AfterContentInit > my-app content is in index.html > Loading AppComponent content here ...');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

 }
