import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {ToastService} from "../../services/toast.service";
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



  constructor(private login:LoginService, private toast: ToastService) {
    console.log('Hello ConfirmacaoComponent Component');
  }

  reenviar(){
    this.login.reenviar().subscribe(
      () => this.toast.toast("Email enviado, verifique sua caixa de entrada"),
      () => this.toast.toast("Houve algum erro ao enviar o email, tente novamente")
    );
    // toast.
  }

}
