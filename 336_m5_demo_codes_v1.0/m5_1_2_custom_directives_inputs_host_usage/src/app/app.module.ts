import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';

import { RootappComponent }   from './components/app/app.component';
import {Red} from './directives/red/red.directive';
import {Demodir} from './directives/hostinputs/hosts.directive';
import {RendererDirective} from './directives/render/renderer';

@NgModule({
    imports: [BrowserModule],
    exports: [],
    declarations: [RootappComponent, Red, Demodir, RendererDirective],
    providers: [],
    bootstrap:[RootappComponent]
})
export class AppModule { }
