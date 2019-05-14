
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/do'

import { Usuario } from '../models/usuario'

import { API } from './api.config'
import {LoginService} from "./login.service";
import {Evento, UsuarioEvento} from "../models/evento";

@Injectable()
export class UsuarioService{

  private usuario: Usuario;

  constructor(private http:HttpClient, private login:LoginService, private storage: Storage){}

    carregaUsuario(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      return this.http.get<any>(
        `${API}/api/usuario/`+this.login.getUsuarioLogado().id,
        {headers: headers}).map(x => x.data);
    }
  }
