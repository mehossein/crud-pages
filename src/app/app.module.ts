import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainModule } from './main/main.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    MainModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    FormlyMaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
