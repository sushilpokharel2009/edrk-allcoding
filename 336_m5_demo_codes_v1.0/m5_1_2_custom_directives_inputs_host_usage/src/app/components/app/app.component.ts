import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
    <h1>Directives</h1>
    <h2 red>This is my First Directive</h2>
    <br>
    <br>
    <dir demodir="Demo Dir Effects"> This is a test- {{texter}}</dir>
    <dir [renderers]="renderers"> This is a test for color entry through directive</dir>
    `
})
export class RootappComponent implements OnInit {
    texter: string = "Test String Entry";
    renderers: string = 'red';
    constructor() { }
    ngOnInit() { }
}