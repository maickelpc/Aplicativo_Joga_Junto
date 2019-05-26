
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/do'

import { Usuario } from '../models/usuario'

import { API } from './api.config'

const LOGGEDIN = 'loggedUser'


@Injectable()
export class LoginService{

  private usuario: Usuario;

  constructor(
    private http:HttpClient,
    private storage: Storage){

    }

  today():Date{
    return new Date();
  }

  estaLogado():boolean{
    return this.usuario !== undefined;
  }

  getUsuarioLogado():Usuario{
    this.storage.get(LOGGEDIN)
    .then(user =>{
        this.usuario = JSON.parse(user);
        var agora = Date.now() / 1000;
        if(this.usuario === null || agora >= this.usuario.exp){
          this.logout();
        }
    }).catch(erro => {
      console.log(erro);
      this.logout();
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
        // console.log(JSON.stringify(this.usuario))
        this.storage.set(LOGGEDIN, JSON.stringify(this.usuario)).then(
          data => console.log("GRAVOU")
        ).catch(
          error => console.log("NAO GRAVOU")
        );
      });

    }

    cadastrar(usuario: Usuario): Observable<Usuario>{

      // let headers = new HttpHeaders();
      // headers = headers.append('Content-type', 'application/json');

      return this.http.post<Usuario>(
        `${API}/api/usuario`,
        {usuario});
      }

    ativar(){
      this.storage.get('loggedUser').then(user =>{
          this.usuario = JSON.parse(user);
        });
      this.usuario.email_verified_at = new Date();
      this.storage.set('loggedUser', JSON.stringify(this.usuario));
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
          `${API}/api/usuario/reenviar/`,
          {headers: headers});
        }


      logout(){
        // window.sessionStorage.removeItem('usuario');
        // this.storage.remove('loggedUser').then(() => console.log("Deslogado!"));
        this.usuario = null;
        // const navCtrl = this.injector.get(NavController)
        // navCtrl.push(LoginPage).then(dd => console.log(dd));

      }

  }
