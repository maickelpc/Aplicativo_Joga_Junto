import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, MenuController, Events } from 'ionic-angular';
import { UserProvider } from "../../providers/user/user";
import { HttpProvider } from "../../providers/http/http";
import { Usuario } from "../../models/usuario";
import { LoginService } from '../../services/login.service'
import { ToastService } from '../../services/toast.service'
import {EventosComponent} from "../../components/eventos/eventos";
import {ConfirmacaoComponent} from "../../components/confirmacao/confirmacao"


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

  constructor(
    public http:HttpProvider,
    public userProvider: UserProvider,
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public translateService: TranslateService,
    private loginService: LoginService,
    private toastService : ToastService,
    public events: Events) {
      this.menuCtrl.enable(false);
      this.translateService.get('LOGIN_ERROR').subscribe((value) => {
        this.loginErrorString = value;
      });

    }

    maxDataNasc(){
      let max = new Date();
      max.setFullYear(max.getFullYear() - 18);
      return max;
    }

    teste(){
      console.log(this.loginService.getUsuarioLogado());
      this.toastService.toast("TESTE");
    }

    login(){
      this.loginService.login(this.usuario.username, this.usuario.password)
      .subscribe(
        dados =>{
          this.toastService.toast("Bem Vindo " + this.usuario.username );
          if(this.loginService.getUsuarioLogado().email_verified_at == null){
            this.goToConfirmacao();
          }else{
            this.events.publish('user:loggedin');
            this.goToListaEventos();
          }

        },
        error => {
          switch(error.status){
            case 0:
              this.toastService.toast("O Servidor remoto recusou a conexão, tente novamente mais tarde");
              break;
            case 401:
              this.toastService.toast("Credenciais inválidas");
              this.usuario.username = '';
              this.usuario.password = '';
            break;
            default:
            this.toastService.toast("Ocorreu um erro na sua tentativa de login");

          }
          
          console.log(error.statusCode);
          console.log(JSON.stringify(error));
        });
      }

      cadastrar(){
        console.log(JSON.stringify(this.usuario));
        this.loginService.cadastrar(this.usuario)
        .subscribe(
          x => {
            console.log("Deu Certo " + JSON.stringify(this.usuario));
            this.login();
          },
          error =>{
            console.log(error);
            let erros = error.error;
            if(Array.isArray(erros)){
              let erro = "";
              for(let i=0; i< erros.length; i++){
                  erro += (erros[i]) + "\n";
              }
              this.toastService.toast(erro);
            }else{
              this.toastService.toast(erros);
            }
          });

        }


        goToListaEventos() {
          this.navCtrl.push(EventosComponent);
          console.log('Vai pra página de eventos');
        }
        goToConfirmacao(){
          console.log('Vai pra página de confirmacao');
          this.navCtrl.push(ConfirmacaoComponent);
        }

      }
