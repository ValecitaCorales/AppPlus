import { Injectable } from '@angular/core';
import {Camera,CameraOptions} from '@ionic-native/camera/ngx';

@Injectable({
  providedIn: 'root'
})
export class CameraService {

  constructor(private camera: Camera) {}

  takePicture(){
    const options :CameraOptions ={
      quality:100,
      destinationType:this.camera.DestinationType.DATA_URL,
      encodingType:this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((ImageData) => {
      //do something
      let base64Image='data:image/jpeg;base64,'+ImageData;
    },(err) => {
      // error
      console.log("Camera issue:"+err);
    }); 
  }
}
