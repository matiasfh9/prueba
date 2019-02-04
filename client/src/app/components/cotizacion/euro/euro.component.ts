import { euroService } from '../../../services/euro.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-euro',
  templateUrl: './euro.component.html',
  styleUrls: ['./euro.component.css']
})


export class euroComponent implements OnInit {
  cotizacion: any = []; 
  constructor(public rest:euroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getEuro();
  }

  getEuro() {
    this.cotizacion = {};

    this.rest.getEuro().subscribe((data: any) => {      
      var objeto = JSON.parse( data);             
      Object.keys(objeto.result).forEach(index => {
        this.cotizacion[index] = objeto.result[index];        
      });            
    });


  }

}
