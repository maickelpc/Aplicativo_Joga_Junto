
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { Usuario } from '../models/usuario'

import { API } from './api.config'

@Injectable()
export class LoginService{

  usuario: Usuario;

  constructor(private http:HttpClient){}

  estaLogado():boolean{
    return this.usuario !== undefined;
  }

  login (login: string, senha:string): Observable<Usuario>{

    let headers = new HttpHeaders();
    headers = headers.append('Content-type', 'application/json');

    return this.http.post<Usuario>(
      `http://ceasb.maickel.site/api-token-auth/`,
      {username: login, password:senha, grant_type: 'password'},
      {headers: headers});


    // return this.http.post<Usuario>(
    //   `${API}/auth/`,
    //   {login: login, senha:senha, grant_type: 'password'},
    //   {headers: headers});
    }

    cadastrar(usuario: Usuario): Observable<Usuario>{

      let headers = new HttpHeaders();
      headers = headers.append('Content-type', 'application/json');
      console.log(`${API}/usuario/`);
      console.log(usuario);


      return this.http.post<Usuario>(
        `${API}/usuario/`,
        {usuario: usuario},
        {headers: headers});
      }

  }

  //
  // import { HttpClient } from '@angular/common/http';
  // import { Injectable } from '@angular/core';
  //
  // /*
  //   Generated class for the HttpProvider provider.
  //
  //   See https://angular.io/guide/dependency-injection for more info on providers
  //   and Angular DI.
  // */
  // @Injectable()
  // export class HttpProvider {
  //
  //   url: string = './assets/mocks/';
  //
  //   constructor(public http: HttpClient) {
  //     console.log('Hello HttpProvider Provider');
  //   }
  //
  //   get(path: string) {
  //     return this.http.get(this.url + path);
  //   }
  //
  // }
