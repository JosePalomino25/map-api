import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {JurisdictionsModule} from "./jurisdictions/jurisdictions.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        JurisdictionsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
