import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent, LoadingComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule ],
  declarations: [ AppComponent, LoadingComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
