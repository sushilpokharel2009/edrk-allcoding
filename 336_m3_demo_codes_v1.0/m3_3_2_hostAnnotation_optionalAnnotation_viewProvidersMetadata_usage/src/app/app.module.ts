import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ParentComponent, ChildComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ParentComponent, ChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
