import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TestcmpComponent } from './testcmp/testcmp.component';
import { TestpipePipe } from './testpipe/testpipe.pipe';
import { TestdirectiveDirective } from './testdirective/testdirective.directive';


@NgModule({
  declarations: [
    AppComponent,
    TestcmpComponent,
    TestpipePipe,
    TestdirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
