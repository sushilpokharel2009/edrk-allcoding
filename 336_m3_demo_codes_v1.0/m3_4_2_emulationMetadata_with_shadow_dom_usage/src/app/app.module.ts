import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, ChildCmp, GrandchildCmp, GreatgrandchildCmp }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ChildCmp, GrandchildCmp, GreatgrandchildCmp ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
