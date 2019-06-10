
import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'

import { Usuario } from '../models/usuario'

import { API } from './api.config'
import {LoginService} from "./login.service";
import {Evento, UsuarioEvento} from "../models/evento";

import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class UsuarioService{

  constructor(
    private http:HttpClient,
    private geolocation: Geolocation,
    private login:LoginService){
      // setInterval(this.atualizaPosicao(), 10000); // 900000 lê a posição a cada 15 minutos

    }

    carregaUsuario(idUsuario): Observable<any> {
      let headers = new HttpHeaders();
      let id;
      if (idUsuario > 0) {
        id = idUsuario;
      } else {
        id = this.login.getUsuarioLogado().id;
      }
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      return this.http.get<any>(
        `${API}/api/usuario/`+id,
        {headers: headers}).map(x => x.data);
    }

    salvarUsuario(usuario: Usuario): Observable<Usuario> {
      let headers = new HttpHeaders();
      headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);
      this.atualizaPosicao();
      return this.http.put<Usuario>(
        `${API}/api/usuario/`+this.login.getUsuarioLogado().id,
        usuario,
        {headers: headers});
    }


    buscarCep(cep : string):Observable<any>{

      var numberPattern = /\d+/g;
      let cepLimpo = cep.match(numberPattern);

      return this.http.get<any>(`https://viacep.com.br/ws/${cepLimpo}/json/`);
    }

    // getGeoPosicao(){
    //   this.watch.subscribe((data) => {
    //    let lat = data.coords.latitude;
    //    let long = data.coords.longitude;
    //    return data;
    //
    //  });
    // }
    watch = this.geolocation.watchPosition();


    atualizaPosicao(){
      if(this.login.estaLogado()){
        console.log("Atualizando posição...");
        this.watch.subscribe((data) => {
         let lat = data.coords.latitude;
         let long = data.coords.longitude;

         let usuario = new Usuario();
         usuario.latitude = lat;
         usuario.longitude = long;

         let headers = new HttpHeaders();
         headers = headers.append('Authorization', 'Bearer '+this.login.getUsuarioLogado().token);

         let http = this.http.patch<any>(
           `${API}/api/usuario/atualizageoposicao/`+this.login.getUsuarioLogado().id,
           usuario, {headers: headers});

         http.subscribe();
       });
      }
    }

  }
