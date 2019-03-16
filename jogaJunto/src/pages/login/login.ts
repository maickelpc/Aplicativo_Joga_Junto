import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import {UserProvider} from "../../providers/user/user";
import {HttpProvider} from "../../providers/http/http";
import {Usuario} from "../../models/usuario";
import { LoginService} from '../../services/login.service'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

/**
 * @author: KMR
 * @email: yajuve.25.dz@gmail.com
 */

export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  public usuario : Usuario =  new Usuario();


  private cadastro: boolean = false;
  // Our translated text strings
  private loginErrorString: string;
  private opt: string = 'signin';
  private toast : any;

  constructor(
    public http:HttpProvider, public userProvider: UserProvider, public menuCtrl: MenuController, public navCtrl: NavController,
    public translateService: TranslateService, private loginService: LoginService, private toastCtrl: ToastController) {
    this.menuCtrl.enable(false);
    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    });

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.toast = this.toastCtrl.create({
      message: '',
      duration: 3000,
      position: 'top',
      showCloseButton: true,
      closeButtonText: "Fechar"
    });
  }

  teste(){
    let teste =  JSON.parse(localStorage.getItem('currentUser'));
    console.log(JSON.stringify( teste ));



    this.toast.present();

  }

  today(){
    return new Date();
  }

  login(){

    this.loginService.login(this.usuario.login, this.usuario.senha)
    .subscribe(
      function(dados){
          console.log("Deu Certo ");
          localStorage.setItem('currentUser', JSON.stringify(dados));
          JSON.stringify(dados);
      },
      function(error){
        alert("Deu Merda ");
        console.log(JSON.stringify(error));
      });
  }

  logout(){
    localStorage.removeItem('currentUser');

  }

  cadastrar(){
    this.loginService.cadastrar(this.usuario)
    .subscribe(
      x => console.log("Deu Certo " + JSON.stringify(x)),
      function(error){
        alert("Deu Merda ");
        console.log(JSON.stringify(error));
      });

  }
  // Attempt to login in through our User service
  // doLogin() {
  //   this.http.get('my-profile.json').subscribe((profile) => {
  //     this.userProvider.user = <User>profile;
  //     this.navCtrl.setRoot('ListFriendsPage');
  //   }, (err) => {
  //     console.error(err);
  //   });

  // }
}
