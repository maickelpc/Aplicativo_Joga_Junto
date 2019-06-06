
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

  private headers = new HttpHeaders();

  constructor(private http:HttpClient, private login:LoginService, private storage: Storage){
    this.headers = this.headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
  }

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

      let dados = {evento: evento, convidados: convidados};
      // console.log(dados);
      console.log(JSON.stringify(dados));

      return this.http.post<Evento>( `${API}/api/evento/`, dados,  {headers: this.headers});
    }

    buscaMeusEventosPendentes(): Observable<Evento[]>{

      return this.http.get<any>(`${API}/api/evento/meus/eventosPendentes/`,  {headers: this.headers})
      .map(x => x.data);

    }

    aceitarConvite(evento: Evento):Observable<any>{

      return this.http.patch<any>(`${API}/api/evento/meus/aceitarconvite/${evento.id}/`, {}, {headers: this.headers})

    }

    recusarConvite(evento: Evento):Observable<any>{

      return this.http.delete<any>(`${API}/api/evento/meus/recusarconvite/${evento.id}/`,  {headers: this.headers})

    }




  }
