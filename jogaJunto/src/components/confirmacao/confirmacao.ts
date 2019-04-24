import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NavController} from 'ionic-angular';
import {LoginService} from "../../services/login.service";
import {ToastService} from "../../services/toast.service";
import {EventosComponent} from "../eventos/eventos";
/**
 * Generated class for the ConfirmacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirmacao',
  templateUrl: 'confirmacao.html'
})
export class ConfirmacaoComponent {

  texto1: string = '';
  texto2: string = '';

  constructor(
    private login:LoginService,
    private toast: ToastService,
    public navCtrl: NavController,) {
    console.log('Hello ConfirmacaoComponent Component');
  }

  confirmar(){
    let codigo: string = this.texto1.toUpperCase() + "-" + this.texto2.toUpperCase();
    this.login.confirmar(codigo).subscribe(
      (dados)=> {
        this.toast.toast("Seu email foi confirmado, e sua conta ativada!");
        this.login.ativar();
        this.goToListaEventos();

      },
      error => {
        console.log(error);
        this.toast.toast("Seu código não foi aceito, verifique e tente novamente");
      }
    );
  }

  reenviar(){
    this.login.reenviar().subscribe(
      () => this.toast.toast("Email enviado, verifique sua caixa de entrada"),
      () => this.toast.toast("Houve algum erro ao enviar o email, tente novamente")
    );
    // toast.
  }

  goToListaEventos() {
    this.navCtrl.push(EventosComponent);
    console.log('Vai pra página de eventos');
  }

}
