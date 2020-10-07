import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: 'googleTagManagerId', useValue: 'GTM-TQSDK33'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
