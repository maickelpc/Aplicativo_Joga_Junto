import { Util } from './../../providers/util/util';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {LoginService} from "../../services/login.service";
import {EsporteService} from "../../services/esporte.service";
import {Evento} from "../../models/evento";
import {Esporte} from "../../models/esporte";
import {Usuario} from "../../models/usuario";
import {NavController, NavParams, ViewController, AlertController} from "ionic-angular";
import { ToastService } from '../../services/toast.service'
import { LoadingController } from 'ionic-angular'
declare var google: any;

/**
* Generated class for the EventoComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'evento',
  templateUrl: 'evento.html'
})
export class EventoComponent {

  public evento: Evento;
  public Util = Util;
  cancelado: boolean = false;
  encerrado : boolean = false;
  euParticipo : boolean = false;
  euOrganizo : boolean = false;
  @ViewChild('map') mapRef: ElementRef;

  constructor(private eventoService: EventoService,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private loginService: LoginService,
    public alertCtrl: AlertController,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
  ) {

  }

  ionViewDidLoad() {
    // TESTE DO MAPREF console.log(this.mapRef);
  }


  participantesConfirmados = [];
  participantesPendentes = [];

  ionViewCanEnter() {
    return new Promise((resolve, reject) =>{
      if (this.navParams.get('fail')) {
        reject(true)
      } else {
        this.eventoService.carregaEvento(this.navParams.get('id')).subscribe(
          response =>{
            this.evento = response;
            this.cancelado = this.evento.dataCancelamento != null;
            let dataRealizacao = this.evento.dataRealizacao.toString().split('/')
            let horas = this.evento.horario.split(':');
            let agora = new Date();
            let data = new Date();

            data.setDate(parseInt(dataRealizacao[0]));
            data.setMonth(parseInt(dataRealizacao[1]));
            data.setFullYear(parseInt(dataRealizacao[2]));

            data.setHours(parseInt(horas[0]));
            data.setMinutes(parseInt(horas[1]));

            this.encerrado = (data < agora);

            this.euOrganizo = this.evento.usuarioResponsavel.id == this.loginService.getUsuarioLogado().id;
            this.euParticipo = (this.evento.participantes.
              filter( x => x.usuario.id == this.loginService.getUsuarioLogado().id && x.situacao == "CONFIRMADO").length > 0) ;
              this.participantesConfirmados = this.evento.participantes.filter( x => x.situacao == "CONFIRMADO");
              this.participantesPendentes = this.evento.participantes.filter( x => x.situacao == "PENDENTE");
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Evento"+error)
            },
            ()=> {
              console.log('Carregou Informações do Evento');
              this.mostraMapa();
            }

          );
        }
      })
    }

    mostraMapa() {
      const localizacao = new google.maps.LatLng(this.evento.local.latitude, this.evento.local.longitude);
      const options = {
        center: localizacao,
        zoom: 4
      }

      const map = new google.maps.Map(this.mapRef.nativeElement, options)

      this.addMarker(localizacao, map)
    }

    addMarker(pos, map) {
      console.log("Add Marker")
      return new google.maps.Marker({
        pos,
        map
      });
    }

    confirmarCancelarEvento() {
      let alert = this.alertCtrl.create({
        title: 'Confirmação de cancelamento do evento',
        inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min:3  } ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: data => {
              this.cancelarEvento(data.justificativa);

            }
          }
        ]
      });
      alert.present();
    }


    cancelarEvento(justificativa: string){
      let loading = this.loading();
      loading.present();
      console.log("Motivo: " + justificativa);
      console.log(this.evento);
      this.eventoService.cancelarEvento(this.evento.id, justificativa).subscribe(
        dados => {
          loading.dismiss();
          this.toastService.toast("Evento Cancelado!");
          this.evento.dataCancelamento = new Date();
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível cancelar o evento, tente novamente")

        }
      )
    }


    confirmarCancelar() {
      let alert = this.alertCtrl.create({
        title: 'Confirmação de Saída de evento',
        inputs: [{ name: 'justificativa', placeholder: 'Justificativa' , min:3 } ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: data => {
              this.cancelarParticipacao(data.justificativa);

            }
          }
        ]
      });
      alert.present();
    }



    cancelarParticipacao(justificativa: string){
      let loading = this.loading();
      loading.present();
      console.log("Motivo: " + justificativa);
      console.log(this.evento);
      this.eventoService.cancelarParticipacao(this.evento.id, justificativa).subscribe(
        dados => {
          console.log(dados);
          loading.dismiss();
          this.toastService.toast("Cancelamento efetivado!");
          this.participantesConfirmados = this.participantesConfirmados.filter(x => x.usuario.id != this.loginService.getUsuarioLogado().id);
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível cancelar sua participação, tente novamente")

        }
      )
    }








    public loading() {
      return this.loadingCtrl.create({
        content: 'Aguarde...',
        dismissOnPageChange: true
      });
    }

  }
