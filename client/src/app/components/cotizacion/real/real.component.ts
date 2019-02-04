import { realService } from '../../../services/real.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})

export class realComponent implements OnInit {

  cotizacion: any = []; 
  constructor(public rest:realService, private route: ActivatedRoute, private router: Router) { }
  

  ngOnInit() {
    this.getReal();
  }

  getReal() {
    this.cotizacion = {};

    this.rest.getReal().subscribe((data: any) => {            
      var objeto = JSON.parse( data);             
      Object.keys(objeto.result).forEach(index => {
        this.cotizacion[index] = objeto.result[index];        
      });            
    });

 
 }

}