import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';


import { cotizacionComponent } from './components/cotizacion/cotizacion.component';
import { cotizacionService } from './services/cotizacion.service';
import { dolarComponent } from './components/cotizacion/dolar/dolar.component';
import { dolarService } from './services/dolar.service';
import { euroService } from './services/euro.service';

import { euroComponent } from './components/cotizacion/euro/euro.component';
import { realComponent } from './components/cotizacion/real/real.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,    
    cotizacionComponent,
    dolarComponent,
    euroComponent,
    realComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    cotizacionService,
    dolarService,    
    euroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
