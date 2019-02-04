import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cotizacionComponent } from  './components/cotizacion/cotizacion.component';
import { dolarComponent } from './components/cotizacion/dolar/dolar.component';


import { euroComponent } from './components/cotizacion/euro/euro.component';
import { realComponent } from './components/cotizacion/real/real.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: '/cotizacion',
    pathMatch: 'full'
  },
  {
    path: 'cotizacion',
    component: cotizacionComponent
  },
  {
    path: 'cotizacion/dolar',
    component: dolarComponent
  },  
  {
    path: 'cotizacion/euro',
    component: euroComponent
  },
  {
    path: 'cotizacion/real',
    component: realComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
