import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import { RootappComponent }   from './components/app/app.component';
import {Httpdemo} from './services/httpsrv/httpsrv.service'
@NgModule({
    imports: [BrowserModule,HttpModule],
    exports: [],
    declarations: [RootappComponent],
    providers: [Httpdemo],
    bootstrap:[RootappComponent]
})
export class AppModule { }
