
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Local } from '../models/local'
import { Esporte } from '../models/esporte'

import { API } from './api.config'
import {LoginService} from "./login.service";

@Injectable()
export class LocalService{

  headers = new HttpHeaders();


  constructor(private http:HttpClient, private login:LoginService){
    this.headers = this.headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
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
