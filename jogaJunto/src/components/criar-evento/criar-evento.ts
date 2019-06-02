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
  passo : number;
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
    this.passo = 1;



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
    this.evento.vagas = esporte.qtdMaximo;
    this.avancar();
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

  checkContato(contato){
    contato.checked = ! contato.checked
  }

  getContatos(){
    let options = new ContactFindOptions();
    options.filter = "";
    options.multiple = true;

    let fields: ContactFieldType[] = ['displayName','name','phoneNumbers','emails'];

    this.contacts.find( fields, options ).then(
      dados => {
        this.meusContatos = dados.map(x=> {
          x.checked = false;
          return x;
        });
        this.temContatos = true;
        console.log(JSON.stringify(dados[1]));
      }
    )
  }

  voltar(){
    switch(this.passo){
      // case 'esporte':
      case 2:
        this.passo = 1;
        break;
      case 3:
        this.passo = 2;
      case 4:
        this.passo = 3;
        break;
    }
  }

  avancar(){
    switch(this.passo){
      case 1:
        this.passo = 2;
        break;
      case 2:
        this.passo = 3;
      case 3:
        this.passo = 4;
        break;
    }
  }

  concluir(){
    //Lista de convidados do celular
    let convidados = this.meusContatos.filter(x => x.checked);

    //LISTA PARA TESTES EM BROWSER
    // let convidados = `[{"_objectInstance":{"id":"3","rawId":"1","displayName":"Daniel","name":{"givenName":"Daniel","formatted":"Daniel "},"nickname":null,"phoneNumbers":[{"id":"5","pref":false,"value":"41 9774-3774","type":"mobile"}],"emails":null,"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},"checked":true},{"_objectInstance":{"id":"4","rawId":"6","displayName":"Tia Keyla","name":{"familyName":"Keyla","givenName":"Tia","formatted":"Tia Keyla"},"nickname":null,"phoneNumbers":[{"id":"30","pref":false,"value":"+55 41 9620-2901","type":"mobile"}],"emails":null,"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},"checked":true},{"_objectInstance":{"id":"7","rawId":"23","displayName":"Caroline","name":{"givenName":"Caroline","formatted":"Caroline "},"nickname":null,"phoneNumbers":[{"id":"115","pref":false,"value":"+55 45 9842-1001","type":"mobile"}],"emails":null,"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},"checked":true}]`;

    convidados = JSON.parse(convidados);


    let loading = this.loading();
    loading.present();

    this.eventoService.criarEvento(this.evento, convidados).subscribe(
      dados => {
        loading.dismiss();
        console.log(dados);
        this.toastService.toast("Evento criado com sucesso!");
      },
      erro => {
        loading.dismiss();
        console.log(erro);
        this.toastService.toast("Erro ao criar o evento: "+erro);
      }

    );

    // console.log(JSON.stringify(this.evento));
  }

  podeAvancar():boolean{
    switch(this.passo){
      case 1:
         return !(this.evento.esporte.id == null);
     case 2:
        return !(this.evento.dataRealizacao == null || this.evento.horario == null);
      case 3:
        return !(this.evento.local.id == 0);
        // break;
      case 4:
        return true;
    }

    return false;
  }

  filtraLocal(){
    console.log("Filtrando o local");
    this.buscaLocal(this.evento.esporte, this.search);
  }

  maxData(){
    let max = new Date();
    max.setFullYear(max.getFullYear() + 1);
    return max;
  }

  minData(){
    return new Date();
  }

  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }

}
