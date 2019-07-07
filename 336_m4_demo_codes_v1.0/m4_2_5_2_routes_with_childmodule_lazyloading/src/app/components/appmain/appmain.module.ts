import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule }  from '@angular/forms';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {appmainRoutingProviders, appmainRouting} from './appmainroutes/appmain.routes';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule, appmainRouting ],
  declarations: [ HomeComponent, AboutComponent, ContactComponent ],
  providers: [appmainRoutingProviders],
  exports:[],
})
export class AppmainModule { }