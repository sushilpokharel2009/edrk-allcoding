import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { AppComponent, RegisterFormComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, CommonModule ],
  declarations: [ AppComponent, RegisterFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
