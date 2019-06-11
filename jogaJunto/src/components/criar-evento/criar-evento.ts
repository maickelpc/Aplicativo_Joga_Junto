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
      dados => { this.esportes = dados;
        console.log(dados) },
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
      },
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
        this.meusContatos = this.meusContatos.sort(function (a, b) {
          if (a.displayName > b.displayName) {
            return 1;
          }
          if (a.displayName < b.displayName) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        this.temContatos = true;
        // console.log(JSON.stringify(dados[1]));
      }
    )
    // let convidados = `[{"_objectInstance":{"id":"67","rawId":"62","displayName":"A ... Pai ","name":{"familyName":"Pai","givenName":"A","formatted":"A Pai"},"nickname":null,"phoneNumbers":[{"id":"329","pref":false,"value":"045 9817-5105","type":"home"}],"emails":[{"id":"323","pref":false,"value":"maickelpc@gmail.com","type":"home"}],"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":[{"id":"330","pref":false,"type":"url","value":"content://com.android.contacts/contacts/67/photo"}],"categories":null,"urls":null},"checked":true},{"_objectInstance":{"id":"74","rawId":"74","displayName":"A Leo Amigo Do Pai","name":{"familyName":"Pai","givenName":"A Leo Amigo","middleName":"Do","formatted":"A Leo Amigo Do Pai"},"nickname":null,"phoneNumbers":[{"id":"402","pref":false,"value":"554-4555","type":"mobile"}],"emails":[{"id":"404","pref":false,"value":"mandaproleo@gmail.com","type":"home"}],"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},"checked":true}]`;
    // let convidados2 = JSON.parse(convidados);

    // this.meusContatos = convidados2.map(x=> {
    //   x.checked = false;
    //   return x;
    // })
  }

  voltar(){
    if(this.passo > 1){
      this.passo--;
    }
  }

  avancar(){
    if(this.passo < 4)
      this.passo++;

  }

  concluir(){
    //Lista de convidados do celular
    let convidados = this.meusContatos.filter(x => x.checked);


    //LISTA PARA TESTES EM BROWSER
    // let convidados = `[{"_objectInstance":{"id":"67","rawId":"62","displayName":"A ... Pai ","name":{"familyName":"Pai","givenName":"A","formatted":"A Pai"},"nickname":null,"phoneNumbers":[{"id":"329","pref":false,"value":"045 9817-5105","type":"home"}],"emails":[{"id":"323","pref":false,"value":"maickelpc@gmail.com","type":"home"}],"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":[{"id":"330","pref":false,"type":"url","value":"content://com.android.contacts/contacts/67/photo"}],"categories":null,"urls":null},"checked":true},{"_objectInstance":{"id":"74","rawId":"74","displayName":"A Leo Amigo Do Pai","name":{"familyName":"Pai","givenName":"A Leo Amigo","middleName":"Do","formatted":"A Leo Amigo Do Pai"},"nickname":null,"phoneNumbers":[{"id":"402","pref":false,"value":"554-4555","type":"mobile"}],"emails":[{"id":"404","pref":false,"value":"mandaproleo@gmail.com","type":"home"}],"addresses":null,"ims":null,"organizations":null,"birthday":null,"note":null,"photos":null,"categories":null,"urls":null},"checked":true}]`;
    // convidados = JSON.parse(convidados);
    //


    let loading = this.loading();
    loading.present();

    this.eventoService.criarEvento(this.evento, convidados).subscribe(
      dados => {
        loading.dismiss();
        this.toastService.toast("Evento criado com sucesso!");
        this.viewCtrl.dismiss();
      },
      erro => {
        loading.dismiss();
        console.log(JSON.stringify(erro));
        this.toastService.toast("Erro ao criar o evento: "+erro.data);
      }

    );

    // console.log(JSON.stringify(this.evento));
  }

  podeAvancar():boolean{
    switch(this.passo){
      case 1:
         return !(this.evento.esporte.id == null);
     case 2:
        return !(this.evento.local.id == 0);
      case 3:
      return !(this.evento.dataRealizacao == null || this.evento.horario == null || this.evento.descricao.length == 0);

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
