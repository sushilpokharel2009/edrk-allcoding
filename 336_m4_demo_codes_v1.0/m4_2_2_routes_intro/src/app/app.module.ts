import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './components/app/app.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {HomeComponent} from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';

import { routing, appRoutingProviders } from './routes/app.routes';

@NgModule({
  imports:      [ BrowserModule, routing ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, ContactComponent,ErrorComponent ],
  providers: [appRoutingProviders],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }