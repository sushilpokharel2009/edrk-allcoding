import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="container">
            <h1>Grocery List</h1>
            <hr>
            <items></items>
        </div>
    `
})
export class AppComponent { }
