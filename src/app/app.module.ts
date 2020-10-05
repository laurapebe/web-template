import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmwrkModule } from '../frmwrk/frmwrk.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FrmwrkModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
