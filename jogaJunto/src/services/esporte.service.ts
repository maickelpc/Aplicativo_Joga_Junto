
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

import { Esporte } from '../models/esporte'

import { API } from './api.config'
import {LoginService} from "./login.service";

@Injectable()
export class EsporteService{


  constructor(private http:HttpClient, private login:LoginService){}

    buscaTodasEsportes(): Observable<any> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);

      return this.http.get<any>(
        `${API}/api/esporte?withPositions=1&per_page=500`,
        {headers: headers});
    }

  }
