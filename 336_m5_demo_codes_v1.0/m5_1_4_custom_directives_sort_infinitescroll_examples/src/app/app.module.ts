import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {SortDemoComponent} from './sort-demo/sortdemo.component';
import {SortByDirective, Sorter} from './sort/sort';
import {InfiniteScrollModule} from './infinite-scroll/index';

@NgModule({
  imports:      [ BrowserModule, InfiniteScrollModule ],
  declarations: [ AppComponent, SortByDirective, SortDemoComponent ],
  providers: [Sorter],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
