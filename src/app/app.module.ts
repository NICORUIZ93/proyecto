import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HojaComponent } from '../app/Components/hoja/hoja.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { RouterRoutingModule } from './router-routing.module';

@NgModule({
  declarations: [AppComponent, HojaComponent, HomeComponent, AboutComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
