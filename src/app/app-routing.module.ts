import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UploadPicComponent } from './upload-pic/upload-pic.component';
import { ForecastComponent } from './forecast/forecast.component';
import { WhatBmiComponent } from './what-bmi/what-bmi.component';
import { ContactComponent } from './contact/contact.component';
import { HealthyComponent } from './healthy/healthy.component';

const routes: Routes = [
  { path: '' , component: MainComponent},
  { path: 'upload-pic' , component: UploadPicComponent},
  { path: 'forecast' , component: ForecastComponent},
  { path: 'what-bmi' , component: WhatBmiComponent},
  { path: 'healthy' , component: HealthyComponent},
  { path: 'contact' , component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent,UploadPicComponent,ForecastComponent]
