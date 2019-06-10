import { Component, OnInit } from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {LocalService} from "../../services/local.service";
import {Evento} from "../../models/evento"
import {Esporte} from "../../models/esporte"
import {Local} from "../../models/local"
import {NavController, NavParams, ViewController} from "ionic-angular"
import { ToastService } from '../../services/toast.service'
import { LoadingController } from 'ionic-angular'
import { Util } from "../../providers/util/util";

import {EventosComponent} from '../eventos/eventos'
/**
 * Generated class for the ConfirmaParticipacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'confirma-participacao',
  templateUrl: 'confirma-participacao.html'
})
export class ConfirmaParticipacaoComponent implements OnInit{

  listaEventos: Evento[];
  listaEventosLocal: Evento[];
  passo : string = 'convites';
  possuiLocal = false;

  constructor(

    private eventoService: EventoService,
    public navCtrl: NavController,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    private localService: LocalService
  ) {  }


  ngOnInit( ){
    this.buscaEventosPendentes();
    this.buscaMeusLocais();
  }

  buscaMeusLocais(){

    // let loading = this.loading();
    // loading.present();
    this.localService.buscaEventosMeuLocal().subscribe(
      dados => {
        this.listaEventosLocal = dados ;
        this.possuiLocal = true;
        // loading.dismiss();
      },
      erro =>{
        // loading.dismiss();
        console.log(erro);
        this.listaEventosLocal = [];
        this.possuiLocal = false;
        this.toastService.toast("Erro ao carregar a lista de locais, Caso você seja administrador de algum local, verifique sua conexão com a internet  e tente novamente!");
      }
    )
  }

  buscaEventosPendentes(){

    let loading = this.loading();
    loading.present();
    this.eventoService.buscaMeusEventosPendentes().subscribe(
      dados => {
        this.listaEventos = dados;
        loading.dismiss();
      },
      erro =>{
        loading.dismiss();
        console.log(erro);
        this.listaEventos = [];
        this.toastService.toast("Erro ao carregar a lista de eventos, tente novamente mais tarde!");
      }
    )
  }

  public aceitarConvite(evento: Evento){
    let loading = this.loading();
    loading.present();
    this.eventoService.aceitarConvite(evento).subscribe(
      dados => {
        this.listaEventos = this.listaEventos.filter(x => x.id != evento.id);
        loading.dismiss();
        this.toastService.toast(`Sua participacao foi confirmada no evento do ${evento.usuarioResponsavel.nome}!`);
        console.log(dados);
      },
      erro =>{
        loading.dismiss();
        console.log(erro);
        this.toastService.toast("Erro ao tentar aceitar o convite, tente novamente mais tarde!");
      }
    )
  }


  public recusarConvite(evento: Evento){
    let loading = this.loading();
    loading.present();
    this.eventoService.recusarConvite(evento).subscribe(
      dados => {
        this.listaEventos = this.listaEventos.filter(x => x.id != evento.id);
        loading.dismiss();
        this.toastService.toast(`O convite para o evento do ${evento.usuarioResponsavel.nome}  foi recusado!`);
        console.log(dados);
      },
      erro =>{
        loading.dismiss();
        console.log(erro);
        this.toastService.toast("Erro ao tentar recusar o convite, tente novamente mais tarde!");
      }
    )
  }



  confirmaCancelarRealizacao(evento){
    console.log(evento);
  }

  confirmaRealizacao(evento){
    console.log(evento);
  }




















  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }
  voltar(){
    this.navCtrl.setRoot(EventosComponent);
  }
}
