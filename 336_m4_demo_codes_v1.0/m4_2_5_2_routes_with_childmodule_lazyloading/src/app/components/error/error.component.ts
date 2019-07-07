import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    template:`<h1>404 Error Finding Page</h1>`
})
export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}