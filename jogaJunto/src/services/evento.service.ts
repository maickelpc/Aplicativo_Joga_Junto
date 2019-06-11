
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

    criarEvento(evento: Evento, convidados: any): Observable<any> {

      let dados = {evento: evento, convidados: convidados};

      // console.log("DADOS DO EVENTO");
      // console.log(JSON.stringify(dados));
      // console.log("__________*******************_______________");
      return this.http.post<any>( `${API}/api/evento`, dados,  {headers: this.headers});
    }

    buscaMeusEventosPendentes(): Observable<Evento[]>{

      return this.http.get<any>(`${API}/api/evento/meus/eventosPendentes/`,  {headers: this.headers})
      .map(x => x.data);

    }

    buscaMeusProximosEventos(): Observable<Evento[]>{

      return this.http.get<any>(`${API}/api/evento/meus/eventosProximos/`,  {headers: this.headers})
      .map(x => x.data);

    }

    aceitarConvite(evento: Evento):Observable<any>{

      return this.http.patch<any>(`${API}/api/evento/meus/aceitarconvite/${evento.id}/`, {}, {headers: this.headers})

    }

    recusarConvite(evento: Evento):Observable<any>{

      return this.http.delete<any>(`${API}/api/evento/meus/recusarconvite/${evento.id}/`,  {headers: this.headers})

    }

    cancelarParticipacao(id: number, justificativa: string): Observable<any>{

      return this.http.put<any>(`${API}/api/evento/meus/cancelarParticipacao/${id}/`,{justificativa: justificativa},  {headers: this.headers})
    }

    cancelarEvento(id: number, justificativa: string): Observable<any>{

      return this.http.put<any>(`${API}/api/evento/meus/cancelarevento/${id}/`,{justificativa: justificativa},  {headers: this.headers})
    }


    aceitarParticipanteEvento(id: number): Observable<any>{

      return this.http.put<any>(`${API}/api/evento/meus/aceitarparticipante/${id}/`,{},  {headers: this.headers})
    }

    recusarParticipanteEvento(id: number, justificativa: string): Observable<any>{

      return this.http.put<any>(`${API}/api/evento/meus/recusarparticipante/${id}/`,{justificativa: justificativa},  {headers: this.headers})
    }

    removerParticipanteEvento(id: number, justificativa: string): Observable<any>{

      return this.http.put<any>(`${API}/api/evento/meus/removerparticipante/${id}/`,{justificativa: justificativa},  {headers: this.headers})
    }

    solicitarParticipacao(id: number, mensagem: string): Observable<UsuarioEvento>{

      return this.http.post<any>(`${API}/api/evento/meus/solicitarparticipacao/${id}/`,{mensagem: mensagem},  {headers: this.headers})
    }

    avaliarUsuario(id, nota, comentario): Observable<any>{

      return this.http.post<any>(`${API}/api/evento/meus/avaliarparticipante/${id}`,{nota: nota, comentario: comentario},  {headers: this.headers})

    }

    buscarUsuariosProximos(evento): Observable<Usuario[]>{
      return this.http.get<any>(`${API}/api/evento/meus/buscarusuarios/${evento.id}`,  {headers: this.headers}).map(x => x.data);
    }

    convidarParticipante(evento, participante): Observable<any>{
      return this.http.post<any>(`${API}/api/evento/meus/convidar/${evento.id}`, {participanteId : participante.id}, {headers: this.headers})
    }

  }
