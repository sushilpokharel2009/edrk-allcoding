import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {ItemService} from './services/item/item.service';

import {AppComponent} from './components/app/app.component';
import {ItemsComponent} from './components/items/items.component';


@NgModule({
    imports: [FormsModule, CommonModule, BrowserModule, HttpModule],
    exports: [],
    declarations: [AppComponent, ItemsComponent],
    providers: [ItemService],
    bootstrap: [AppComponent]
})
export class AppModule {

}