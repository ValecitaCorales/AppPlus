import { Component } from '@angular/core';
import { InfoUsuario } from 'src/app/interfaces/info-usuario';
import { APIClientService } from 'src/app/services/apiclient.service';
import { BdLocalService } from 'src/app/services/bd-local.service';


@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage { 

  dat:InfoUsuario[]=[];

  constructor(private bdLocalService: BdLocalService, private api:APIClientService) {
    this.getData();
  }
  
  getData(){
    this.api.getData().subscribe(data => {
      console.log(data);
    })
  }

  cargarAlumnos(){
    this.api.getAlumnos(this.dat);
  }

  cerrarSesion(){
    this.bdLocalService.cerrarSesion();
    }
  
  
    
}
