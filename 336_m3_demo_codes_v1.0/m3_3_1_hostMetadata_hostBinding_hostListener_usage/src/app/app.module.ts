import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildComponent, HostDirective }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildComponent, HostDirective ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
