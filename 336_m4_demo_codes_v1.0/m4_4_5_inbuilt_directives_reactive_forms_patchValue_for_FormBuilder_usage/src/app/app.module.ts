import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent, RegisterFormComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule  ],
  declarations: [ AppComponent, RegisterFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
