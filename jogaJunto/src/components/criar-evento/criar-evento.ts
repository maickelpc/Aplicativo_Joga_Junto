import { Component, OnInit } from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {EsporteService} from "../../services/esporte.service";
import {LocalService} from "../../services/local.service";
import {Evento} from "../../models/evento"
import {Esporte} from "../../models/esporte"
import {Local} from "../../models/local"
import {NavController, NavParams, ViewController} from "ionic-angular"
import { ToastService } from '../../services/toast.service'
import { LoadingController } from 'ionic-angular'
import { Util } from "../../providers/util/util";
import { Contacts, Contact, ContactField, ContactName , ContactFindOptions, ContactFieldType} from '@ionic-native/contacts';



@Component({
  selector: 'criar-evento',
  templateUrl: 'criar-evento.html',
})
export class CriarEventoComponent implements OnInit{
  public Util = Util;
  seguimento : string;
  evento: Evento = new Evento();
  esportes: Esporte[];
  locais: Local[];
  local : Local;
  search: string;
  temContatos: boolean = false;
  meusContatos: any;

  constructor(
    private esporteService: EsporteService,
    private eventoService: EventoService,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    private localService: LocalService,
    private contacts: Contacts) {  }

  ngOnInit(){
    this.local = new Local();
    this.local.id = -1;
    this.seguimento = 'esporte';



    let loading = this.loading();
    loading.present();

    this.esporteService.buscaMeusEsportes().subscribe(
      dados => this.esportes = dados,
      erro => {
        console.log(erro);
        this.toastService.toast("Erro ao buscar os esportes, tente novamente mais tarde!");
        loading.dismiss();
      },
      () => loading.dismiss()
    )

    this.getContatos();
  }

  selecionaEsporte(esporte: Esporte){
    this.evento.esporte = esporte;
    this.evento.local = new Local();
    this.seguimento = 'local';
    this.buscaLocal(esporte);
  }

  buscaLocal(esporte: Esporte, nome:string = null){
    this.locais = [];
    this.evento.local = new Local();
    this.localService.buscaLocalPorEsporte(esporte, nome).subscribe(
      dados => {
        this.locais = dados;
        console.log(this.locais)},
      erro => {
        console.log(erro);
        this.toastService.toast("Erro ao buscar os locais, tente novamente mais tarde!");
      }
    )
  }

  getContatos(){
    let options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;

    let fields: ContactFieldType[] = ['displayName','name','phoneNumbers','emails'];

    this.contacts.find( fields, options ).then(
      dados => {
        this.meusContatos = dados;
        this.temContatos = true;
        console.log(JSON.stringify(dados[1]));
      }
    )
  }

  voltar(){
    switch(this.seguimento){
      // case 'esporte':
      case 'local':
        this.seguimento = 'esporte';
        break;
      case 'convidados':
        this.seguimento = 'local';
    }
  }

  avancar(){
    switch(this.seguimento){
      case 'esporte':
        this.seguimento = 'local';
        break;
      case 'local':
        this.seguimento = 'convidados';
        break;
      // case 'convidados':
      //   this.seguimento = 'local';
    }
  }

  concluir(){
    console.log(JSON.stringify( this.evento))
  }

  podeAvancar():boolean{
    switch(this.seguimento){
      case 'esporte':
         return !(this.evento.esporte.id == null);
      case 'local':
        return !(this.evento.local.id == 0);
        // break;
      case 'convidados':
        return true;
    }

    return false;
  }

  filtraLocal(){
    console.log("Filtrando o local");
    this.buscaLocal(this.evento.esporte, this.search);
  }


  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }

}
