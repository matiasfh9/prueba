import { Component, OnInit } from '@angular/core';
import { dolarService } from '../../../services/dolar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class dolarComponent implements OnInit {
  cotizacion: any = []; 
  //constructor( private dolarService: dolarService) { }
  constructor(public rest:dolarService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getDolar();

  }

  getDolar() {
    this.cotizacion = {};

    this.rest.getDolar().subscribe((data: any) => {      
      
      var objeto = JSON.parse( data);
                   
      Object.keys(objeto.result).forEach(index => {
        this.cotizacion[index] = objeto.result[index];        
      });      
      
    });
  }
  

}
