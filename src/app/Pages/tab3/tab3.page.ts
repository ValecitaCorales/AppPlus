import { Component } from '@angular/core';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private bdLocalService: BdLocalService) {}
  cerrarSesion(){
    this.bdLocalService.cerrarSesion();
  } 

}
