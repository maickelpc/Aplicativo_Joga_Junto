import { Component, OnInit } from '@angular/core';
import { LoginService, UsuarioService } from '../../services'
import { ToastService } from '../../services/toast.service'
import { EventosComponent } from "../../components/eventos/eventos";
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController, Events } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login'
/**
 * Generated class for the LogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'logout',
  templateUrl: 'logout.html'
})
export class LogoutComponent implements OnInit{

  text: string;

  ngOnInit(){
    this.events.publish('user:loggedout');
    this.loginService.logout(true);
    this.goToLogin();
  }

  goToLogin(){
    this.navCtrl.setRoot(LoginPage);
  }

  constructor(
    public events: Events,
  public navCtrl: NavController,
  public translateService: TranslateService,
  private loginService: LoginService,
  private toastService : ToastService) {

  }

}
