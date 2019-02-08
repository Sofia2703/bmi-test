import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { UploadPicComponent } from './upload-pic/upload-pic.component';
import { ForecastComponent } from './forecast/forecast.component';

const routes: Routes = [
  { path: '' , component: MainComponent},
  { path: 'upload-pic' , component: UploadPicComponent},
  { path: 'forecast' , component: ForecastComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainComponent,UploadPicComponent,ForecastComponent]
