import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, StrRemoveElOrInnerHTMLDirective, NonStrRemoveElOrInnerHTML }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StrRemoveElOrInnerHTMLDirective, NonStrRemoveElOrInnerHTML ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
