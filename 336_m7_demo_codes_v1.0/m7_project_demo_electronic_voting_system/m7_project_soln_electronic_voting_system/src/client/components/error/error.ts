import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'error',
    template: `
    <div>Error Could Not find URL</div>
    `
})
export class ErrorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
