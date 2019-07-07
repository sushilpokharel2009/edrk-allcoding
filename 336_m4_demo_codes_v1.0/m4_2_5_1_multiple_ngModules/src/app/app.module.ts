import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import {TeamModule} from './components/team/team.module'

import { AppComponent }   from './components/app/app.component';
import { AppmainModule } from './components/appmain/appmain.module';

import { ErrorComponent } from './components/error/error.component';


import { routing, appRoutingProviders } from './routes/app.routes';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, AppmainModule, TeamModule,routing  ],
  declarations: [ AppComponent, ErrorComponent ],
  providers: [appRoutingProviders],
  exports:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }