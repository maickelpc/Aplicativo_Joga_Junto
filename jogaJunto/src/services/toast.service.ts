import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';


@Injectable()
export class ToastService{
  constructor(private toastCtrl: ToastController) {

  }

  private mensagem: string;

  public toast(mensagem: string){

    this.mensagem = mensagem;

    let toast = this.toastCtrl.create({
      message: mensagem,
      duration: 3000,
      position: 'top',
      showCloseButton: true
    });

    toast.onDidDismiss(() => {
    });

    toast.present();

  }


  private presentToast() {

    let toast = this.toastCtrl.create({
      message: this.mensagem,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
    });

    toast.present();
  }
}
