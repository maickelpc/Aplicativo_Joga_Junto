
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Cidade } from '../models/endereco'

import { API } from './api.config'
import {LoginService} from "./login.service";

@Injectable()
export class CidadeService{

  private cidade: Cidade;

  constructor(private http:HttpClient, private login:LoginService){}

    buscaTodasCidades(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);

      return this.http.get<any>(
        `${API}/api/cidade?per_page=500`,
        {headers: headers});
    }

    buscaPorIbge(codigo: string): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);

      return this.http.get<any>(
        `${API}/api/cidade/ibge/${codigo}`,
        {headers: headers});
    }

  }
