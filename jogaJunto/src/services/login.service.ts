
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { Usuario } from '../models/usuario'

import { API } from './api.config'

@Injectable()
export class LoginService{

  private usuario: Usuario;

  constructor(private http:HttpClient){}

  estaLogado():boolean{
    return this.usuario !== undefined;
  }

  usuarioLogado():Usuario{
    this.usuario = JSON.parse(window.localStorage.getItem('loggedUser'));
    var agora = Date.now() / 1000;
    if(agora < this.usuario.tokenExpire){
      return this.usuario;
    }else{
      this.logout();
    }

  }

  login (login: string, senha:string): Observable<Usuario>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');
    console.log("entrando no login");
    return this.http.post<Usuario>(
      `${API}/api/auth/login`,
      {username: login, password:senha, grant_type: 'password'},
      {headers: headers}).do(user => {
        console.log(user);

        let data = user.tokenAccess.toString().split('.');
        let userTemp = JSON.parse(atob(data[1]));

        this.usuario = user;
        this.usuario.id = userTemp.user_id;
        this.usuario.email = userTemp.email;
        this.usuario.tokenExpire = userTemp.exp;

        window.localStorage.setItem('loggedUser', JSON.stringify(user));
      });

    }

    cadastrar(usuario: Usuario): Observable<Usuario>{

      let headers = new HttpHeaders();
      headers = headers.append('Content-type', 'application/json');
      console.log(`${API}/api/usuario/`);
      console.log(usuario);


      return this.http.post<Usuario>(
        `${API}/api/usuario/`,
        {usuario: usuario},
        {headers: headers});
      }


      logout(){
        // window.sessionStorage.removeItem('usuario');
        window.localStorage.removeItem('loggedUser');
        this.usuario = null;

      }

  }
