import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template:`
    <h1>Directives</h1>
    <h2 red>This is my First Directive</h2>
    `
})
export class RootappComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}