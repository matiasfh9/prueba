import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class realService {

  API_URI = 'http://localhost:3000/cotizacion';

  constructor(private Http:HttpClient)   {}


  getReal(){
    return this.Http.get(`${this.API_URI}/real`);
  }
}
