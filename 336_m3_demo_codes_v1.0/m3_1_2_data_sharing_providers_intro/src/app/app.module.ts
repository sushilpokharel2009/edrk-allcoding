import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { DevDetailsComponent } from './dev-details.component';

/* Importing DevService */
import {DevService} from './dev.service';

@NgModule({
  imports:      [ BrowserModule, CommonModule, FormsModule ],
  declarations: [ AppComponent, DevDetailsComponent ],
  providers: [{provide: DevService, useClass: DevService}],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
