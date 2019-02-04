import { Component, OnInit } from '@angular/core';
import { cotizacionService } from '../../services/cotizacion.service';

@Component({
  selector: 'app-cotizacion',
  templateUrl: './cotizacion.component.html',
  styleUrls: ['./cotizacion.component.css']
})
export class cotizacionComponent implements OnInit {

  cotizacion: any = [];

  constructor( private cotizacionService: cotizacionService) { }

  ngOnInit() {
    this.cotizacionService.getcotizacion().subscribe(
      res => {
        this.cotizacion = res;
      },      
      err => console.error(err)
    );

  }

}
