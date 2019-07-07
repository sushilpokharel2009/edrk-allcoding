import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import { RootappComponent }   from './components/app/app.component';
import {Red} from './directives/red/red.directive';
import {Demodir} from './directives/hostinputs/hosts.directive';
import {Uppercase} from './pipes/uppercase/upper.pipe';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [RootappComponent, Red, Demodir, Uppercase],
    providers: [],
    bootstrap:[RootappComponent]
})
export class AppModule { }
