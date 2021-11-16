import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { InfoUsuario } from '../interfaces/info-usuario';

@Injectable({
  providedIn: 'root'
})
export class BdLocalService {

  info:InfoUsuario[]=[];
  private _storage: Storage | null = null;

  constructor(private storage: Storage, public toastController:ToastController) {
    this.init();
    this.cargarInfo();
  }


  guardarInfo(usuario:string, nombre:string, email:string,telefono:string,carrera:string,jornada:string){
    const existe= this.info.find(c=>c.strNombre===nombre);
    if (!existe) {
      this.info.unshift({strUsuario:usuario,strNombre:nombre,strEmail:email,strTelefono:telefono,strCarrera:carrera,strJornada:jornada});
      this._storage.set('info',this.info);
      this.presentToast("Usuario Agregado Exitosamente")
    } else {
      this.presentToast("ERROR: Ya existe el usuario")
    }
  }
  
  existeInfo(usuario:string):boolean{
    const existe= this.info.find( c=>c.strUsuario===usuario);
    if (existe) {
      return true;
    }else{
      return false;
    }      
  }

  async cargarInfo() {
    const miInfo = await this.storage.get('info');
    if (miInfo) {
      this.info=miInfo;
    }
  }


  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  iniciarSesion(){
    this._storage.set('token','logged-in');
  }

  cerrarSesion(){
    this._storage.remove('token');
  }

  async presentToast(mensaje:string) {

    const toast = await this.toastController.create({
      message: mensaje,
      translucent:true,
      color:'medium',
      position: 'top',
      duration: 2000
    });
    toast.present();
  }
  
}
