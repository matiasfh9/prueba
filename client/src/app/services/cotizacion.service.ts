import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

import { cotizacion} from '../models/cotizacion';

@Injectable({
  providedIn: 'root'
})

export class cotizacionService {

  API_URI = 'http://localhost:3000/api';

  constructor(private Http:HttpClient)   {}


  getcotizacion(){
    return this.Http.get(`${this.API_URI}/cotizacion`);
  }

}
