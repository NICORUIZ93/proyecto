import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { HojaComponent } from './Components/hoja/hoja.component';
import { AboutComponent } from './Components/about/about.component';

const routes: Routes = [
  { path: 'home', component: HojaComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HojaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RouterRoutingModule {}
