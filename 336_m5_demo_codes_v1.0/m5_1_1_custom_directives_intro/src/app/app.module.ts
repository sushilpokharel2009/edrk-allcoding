import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import { RootappComponent }   from './components/app/app.component';
import {Red} from './directives/red.directive';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [RootappComponent, Red],
    providers: [],
    bootstrap:[RootappComponent]
})
export class AppModule { }
