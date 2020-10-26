import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { HojaComponent } from './Components/hoja/hoja.component';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hoja', component: HojaComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouterRoutingModule {}
