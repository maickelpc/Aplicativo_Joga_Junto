
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
export class EventoService{

  private usuario: Usuario;

  constructor(private http:HttpClient, private login:LoginService, private storage: Storage){}

  evento (): Observable<UsuarioEvento[]>{

    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
    return this.http.get<any>(
      `${API}/api/evento/getEventosUsuario/`,
      {headers: headers}).map(x => x.data);
    }

    carregaEvento(id): Observable<Evento> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      return this.http.get<any>(
        `${API}/api/evento/`+id,
        {headers: headers}).map(x => x.data);
    }

    eventosRegiao(): Observable<Evento[]> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      return this.http.get<any>(
      `${API}/api/evento/getEventosRegiaoUsuario/`+this.login.getUsuarioLogado().latitude+`/`+this.login.getUsuarioLogado().longitude,
      {headers: headers}).map(x => x.data);
    }
    
    criarEvento(evento: Evento, convidados: any): Observable<Evento> {
      let headers = new HttpHeaders();
      let dados = {evento: evento, convidados: convidados};
      // console.log(dados);
      console.log(JSON.stringify(dados));
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      return this.http.post<Evento>( `${API}/api/evento/`, dados,  {headers: headers});
    }
  }
