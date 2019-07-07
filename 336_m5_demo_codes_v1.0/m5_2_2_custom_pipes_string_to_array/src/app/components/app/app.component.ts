import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
    <h1>Directives</h1>
    <h2 red>This is my First Directive</h2>
    <br>
    <br>
    <dir demodir="Demo Dir Effects"> This is a uppercase test- {{texter | uppercase}}</dir>
    <br>
    <br>
    <dir demodir="Demo Dir Effects"> This is a strtoarr test- {{texter | stringtoarray}}</dir>
    `
})
export class RootappComponent implements OnInit {
    texter: string = "Test String Entry";
    constructor() { }

    ngOnInit() { }
}