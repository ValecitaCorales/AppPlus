import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera/ngx';
import { CameraService } from 'src/app/services/camera.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private camara:CameraService,private _camara:Camera) {}


  abrircamara(){
    this._camara.getPicture();

  }
}
