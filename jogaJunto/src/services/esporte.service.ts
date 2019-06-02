
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Esporte } from '../models/esporte'

import { API } from './api.config'
import {LoginService} from "./login.service";

@Injectable()
export class EsporteService{

  headers = new HttpHeaders();


  constructor(private http:HttpClient, private login:LoginService){
    this.headers = this.headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
  }


    buscaTodasEsportes(): Observable<any> {


      return this.http.get<any>(
        `${API}/api/esporte?withPositions=1&per_page=500`,
        {headers: this.headers});
    }

    buscaMeusEsportes(): Observable<Esporte[]>{
      return this.http.get<Esporte[]>(
        `${API}/api/esporte/meus/esportes`,
        {headers: this.headers});

    }

  }
