
import { Injectable, Injector } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/do'
import { NavController } from 'ionic-angular';

import { Usuario } from '../models/usuario'

import { API } from './api.config'

const LOGGEDIN = 'loggedUser'
const CREDENCIAIS = 'credentialsUser'


@Injectable()
export class LoginService{

  private usuario: Usuario;

  constructor(
    public injector: Injector,
    private http:HttpClient,
    private storage: Storage){

    }

  today():Date{
    return new Date();
  }

  clearCredenciais(){
    this.storage.remove(CREDENCIAIS);
  }

  setCredenciais(login: String, senha: String){
    let credenciais = {login : login, senha: senha}
    this.storage.set(CREDENCIAIS, JSON.stringify(credenciais));

  }

  getCredenciais(){
    let credenciais : any = null;
    return this.storage.get(CREDENCIAIS);

  }

  estaLogado():boolean{
    return (this.getUsuarioLogado() !== undefined && this.getUsuarioLogado() !== null);
  }

  getUsuarioLogado():Usuario{
    this.storage.get(LOGGEDIN)
    .then(user =>{
        this.usuario = JSON.parse(user);
        var agora = Date.now() / 1000;
        if(this.usuario === null || agora >= this.usuario.exp){
          this.logout(false);
        }
    }).catch(erro => {
      console.log(erro);
      this.logout(false);
    });
    return this.usuario;

  }


  login (username: string, password:string): Observable<Usuario>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/x-www-form-urlencoded');

    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post<Usuario>(
      `${API}/api/auth/login`,
      body, {headers: headers}).do(user => {
        let data = user.token.toString().split('.');
        let userTemp = JSON.parse(atob(data[1]));
        this.usuario = userTemp;
        this.usuario.token = user.token.toString();
        this.storage.set(LOGGEDIN, JSON.stringify(this.usuario)).then(
        ).catch(
          error => console.log("NAO GRAVOU")
        );

        this.setCredenciais(username, password);
      });

    }

    cadastrar(usuario: Usuario): Observable<Usuario>{

      // let headers = new HttpHeaders();
      // headers = headers.append('Content-type', 'application/json');

      this.setCredenciais(usuario.username, usuario.password);

      return this.http.post<Usuario>(
        `${API}/api/usuario`,
        {usuario});
      }

    ativar(){
      this.storage.get(LOGGEDIN).then(user =>{
          this.usuario = JSON.parse(user);
        });
      this.usuario.email_verified_at = new Date();
      this.storage.set(LOGGEDIN, JSON.stringify(this.usuario));
    }

    confirmar(codigo : string){
      let headers = new HttpHeaders();
      headers = headers.append('Content-type', 'application/json');
      return this.http.get<any>(
        `${API}/api/usuario/confirmar/${this.getUsuarioLogado().id}/${codigo}`,
      {headers: headers});
    }

      reenviar(): Observable<any>{

        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Bearer '+this.getUsuarioLogado().token);
        return this.http.get<any>(
          `${API}/api/usuario/reenviar`,
          {headers: headers});
        }


      logout(removeCredenciais: boolean = false){

        this.storage.remove(LOGGEDIN).then(() => console.log("Deslogado!"));
        if(removeCredenciais)
          this.storage.remove(CREDENCIAIS);
        this.usuario = null;
        // const navCtrl = this.injector.get(NavController)
        // navCtrl.setRoot('LoginPage');

      }

  }
