import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Taulell1Component } from './taulell1/taulell1.component';
import { Taulell2Component } from './taulell2/taulell2.component';

@NgModule({
  declarations: [
    AppComponent,
    Taulell1Component,
    Taulell2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
