import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BdLocalService } from 'src/app/services/bd-local.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  user={
    usuario:"",     
    password:""
  }
  
  ionicForm: FormGroup;
  isSubmitted = false;

  

  constructor(private router: Router, private loadingCtrl: LoadingController, public formBuilder: FormBuilder, private bdLocalService: BdLocalService, public toastController:ToastController) {}
  


  ngOnInit(){

    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(8)]]
    })
  } 
  
  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      return false;
    } else {
      this.ingresar();
    }
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  showLoading(){                                 //acá creamos la función

    this.loadingCtrl.create({                    /*usamos el parametro loadingCtrl para crear 
                                                 el objeto "cargando"*/

      message: "Cargando, espere por favor...",  //el mensaje agregado a la espera
      spinner: 'crescent'                        // el tipo de animación a usar

    }).then((loading) =>{

      loading.present();                        //traemos el loading a escena

      setTimeout(() => {                        //indicamos duración de animacion
        loading.dismiss();
      }, 3000)
    })    
  }

  ingresar(){     
    if(!(this.user.usuario=='ri.arayah') && !(this.user.password=='12345')){
      this.presentToast("ERROR: usuario o contraseña equivocada")            // navegamos hacia el Home y enviamos información adicional
    }else{
      this.showLoading();
      this.bdLocalService.iniciarSesion();
      this.router.navigate(['/tabs']);                                    //llamamos a la función previo a la transición         
    }     
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
