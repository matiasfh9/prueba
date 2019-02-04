import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class euroService {

  API_URI = 'http://localhost:3000/cotizacion';

  constructor(private Http:HttpClient)   {}


  getEuro(){
    return this.Http.get(`${this.API_URI}/euro`);
  }
}
