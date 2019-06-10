
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Local } from '../models/local'
import { Esporte } from '../models/esporte'
import { Evento } from '../models/evento'

import { API } from './api.config'
import {LoginService} from "./login.service";

@Injectable()
export class LocalService{

  headers = new HttpHeaders();


  constructor(private http:HttpClient, private login:LoginService){
    this.headers = this.headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
  }

  confirmarRealizacao(id):Observable<any>{
    return this.http.put<any>(
      `${API}/api/meuslocais/confirmar-evento/${id}` ,{headers: this.headers});

  }

  cancelarRealizacao(id, justificativa):Observable<any>{
    return this.http.put<any>(
      `${API}/api/meuslocais/cancelar-evento/${id}`,{justificativa: justificativa} ,{headers: this.headers});

  }

  buscaEventosMeuLocal():Observable<Evento[]>{
    return this.http.get<Evento[]>(
      `${API}/api/meuslocais/eventos`, {headers: this.headers});

  }

  atualizarGps(id, lat, long): Observable<any>{
    return this.http.patch<any>(
      `${API}/api/local/${id}`, {latitude: lat, longitude: long},
      {headers: this.headers});

  }

  atualizar(local): Observable<any>{
    console.log(JSON.stringify( local ));

    return this.http.put<any>(
      `${API}/api/local/${local.id}`, local,
      {headers: this.headers});

  }

  requisitarLocal(id): Observable<any>{

    return this.http.get<Local[]>(
      `${API}/api/localrequisitar/${id}`,
      {headers: this.headers});

  }

  buscarLocaisSemConfirmacao(nome, cidade): Observable<Local[]>{

    return this.http.get<Local[]>(
      `${API}/api/localsemconfirmacao?local=${nome}&cidade=${cidade}`,
      {headers: this.headers});

  }

    buscaMeusLocais(): Observable<Local[]>{

      return this.http.get<Local[]>(
        `${API}/api/meuslocais`,
        {headers: this.headers});

    }

    buscaLocalPorEsporte(esporte: Esporte, nome:string): Observable<Local[]>{
      if (nome != null)
        nome = '?nome='+nome;
      else
        nome = '';
      return this.http.get<Local[]>(
        `${API}/api/local/esporte/${esporte.id}${nome}`,
        {headers: this.headers});

    }

  }
