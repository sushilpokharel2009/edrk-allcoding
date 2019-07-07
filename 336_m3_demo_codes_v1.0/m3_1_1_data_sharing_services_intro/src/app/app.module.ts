import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {DevDetailsComponent} from './dev-details.component';
/* Importing DevService */
import {DevService} from './dev.service';

@NgModule({
    imports: [BrowserModule, FormsModule, CommonModule],
    exports: [],
    declarations: [AppComponent, DevDetailsComponent],
    providers: [DevService],
    bootstrap:[AppComponent]
})
export class AppModule { }
