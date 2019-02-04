import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class dolarService {

  API_URI = 'http://localhost:3000/cotizacion';

  constructor(private Http:HttpClient)   {}


  getDolar(){
    return this.Http.get(`${this.API_URI}/dolar`);
  }

}
