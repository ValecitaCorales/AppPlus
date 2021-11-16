import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  
  dateTime: Observable<Date>

  constructor(private bdLocalService: BdLocalService) {}
  cerrarSesion(){
    this.bdLocalService.cerrarSesion();
  }  

  ngOnInit(){

    this.dateTime = timer(0,1000).pipe(
      map(() => {
        return new Date()
      })
    )
  }


}
