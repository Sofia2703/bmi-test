import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { AppRoutingModule ,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { MainComponent } from './main/main.component';
// import { UploadPicComponent } from './upload-pic/upload-pic.component';
// import { ForecastComponent } from './forecast/forecast.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './demo-material';
import { AgGridModule } from 'ag-grid-angular';
import { WhatBmiComponent } from './what-bmi/what-bmi.component';
import { HealthyComponent } from './healthy/healthy.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    WhatBmiComponent,
    HealthyComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    AgGridModule.withComponents(null),
    AngularFontAwesomeModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
