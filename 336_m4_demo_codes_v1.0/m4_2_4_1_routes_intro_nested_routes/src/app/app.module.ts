import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';
import { AppComponent }   from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import {TeamComponent} from './components/team/team.component';
import {TeamHomeComponent} from './components/team/home/team.home.component';
import {TeamItemComponent} from './components/team/item/team.item.component';

import { routing, appRoutingProviders } from './routes/app.routes';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, routing ],
  declarations: [ 
    AppComponent, HomeComponent, AboutComponent, 
    ContactComponent, ErrorComponent,
    TeamComponent, TeamHomeComponent, TeamItemComponent ],
  providers: [appRoutingProviders],
  exports:[],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }