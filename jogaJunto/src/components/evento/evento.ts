import { Util } from './../../providers/util/util';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {LoginService} from "../../services/login.service";
import {EsporteService} from "../../services/esporte.service";
import {Evento} from "../../models/evento";
import {Esporte} from "../../models/esporte";
import {Usuario} from "../../models/usuario";
import { NavParams, ViewController, AlertController} from "ionic-angular";
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
  meuId: number;
  encerrado : boolean = false;
  euParticipo : boolean = false;
  euOrganizo : boolean = false;
  @ViewChild('map') mapRef: ElementRef;

  constructor(private eventoService: EventoService,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private loginService: LoginService,
    public alertCtrl: AlertController,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
  ) {
    this.meuId = this.loginService.getUsuarioLogado().id;
  }

  ionViewDidLoad() {
    // TESTE DO MAPREF console.log(this.mapRef);
  }


  comentario: string = '';
  participantesConfirmados = [];
  participantesPendentes = [];
  solicitacoesPendentes = [];
  minhaSolicitacaoPendente: any;

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

            // this.encerrado = (data < agora);
            this.encerrado = true;

            this.euOrganizo = this.evento.usuarioResponsavel.id == this.loginService.getUsuarioLogado().id;
            this.euParticipo = (this.evento.participantes.
              filter( x => x.usuario.id == this.loginService.getUsuarioLogado().id && x.situacao == "CONFIRMADO").length > 0) ;

              this.participantesConfirmados = this.evento.participantes.filter( x => x.situacao == "CONFIRMADO");
              this.participantesPendentes = this.evento.participantes.filter( x => x.situacao == "PENDENTE" && x.dataConfirmacao == null);
              this.solicitacoesPendentes = this.evento.participantes.filter( x => x.situacao == "PENDENTE" && x.dataConfirmacao != null);

              this.minhaSolicitacaoPendente = this.solicitacoesPendentes.filter(x=> x.usuario_id == this.loginService.getUsuarioLogado().id)[0];


              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Evento"+error)
            },
            ()=> {
              // console.log('Carregou Informações do Evento');
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
      // console.log("Add Marker")
      return new google.maps.Marker({
        pos,
        map
      });
    }

    jaAvaliei(avaliacoes):boolean{
      let avaliei = avaliacoes.filter(x => x.usuarioAvaliador_id == this.meuId);

      return avaliei.length > 0;
    }


    confirmarAvaliacao(usuarioEvento) {
      let alert = this.alertCtrl.create({
        title: 'Avaliar '+ usuarioEvento.usuario.nome,
        inputs: [
          // { name: 'nota', type:'number',label: 'Nota',min: '1' , max:'5' , placeholder: 'Nota (1..5)'},
          { name: 'nota', type: 'radio', value: '5', label:'5 estrelas', checked: true},
          { name: 'nota', type: 'radio', value: '4', label:'4 estrelas'},
          { name: 'nota', type: 'radio', value: '3', label:'3 estrelas'},
          { name: 'nota', type: 'radio', value: '2', label:'2 estrelas'},
          { name: 'nota', type: 'radio', value: '1', label:'1 estrelas'},

          // { name: 'comentario', type:'text', label: 'Comentário'},


        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: data => {
              console.log(data);
              this.avaliar(usuarioEvento, data, usuarioEvento.comentario);

            }
          }
        ]
      });
      alert.present();
    }


    avaliar(usuarioEvento, nota, comentario){
      let loading = this.loading();
      loading.present();
      this.eventoService.avaliarUsuario(usuarioEvento.id, nota, comentario).subscribe(
        dados => {
          loading.dismiss();
          this.toastService.toast("Avaliação Registrada!");
          this.comentario = '';
          usuarioEvento.avaliacoes.push({usuarioAvaliado: usuarioEvento.id, usuarioAvaliador_id :this.meuId ,texto: comentario, score: nota});
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível Registrar a avaliação, tente novamente")

        }
      )
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
              // console.log('Cancel clicked');
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




    confirmarCancelarParticipacao() {
      let alert = this.alertCtrl.create({
        title: 'Confirmação de Saída de evento',
        inputs: [{ name: 'justificativa', placeholder: 'Justificativa' , min:3 } ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {

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
      this.eventoService.cancelarParticipacao(this.evento.id, justificativa).subscribe(
        dados => {
          loading.dismiss();
          this.toastService.toast("Cancelamento efetivado!");
          this.participantesConfirmados = this.participantesConfirmados.filter(x => x.usuario.id != this.loginService.getUsuarioLogado().id);
          this.participantesPendentes = this.participantesPendentes.filter(x => x.usuario.id != this.loginService.getUsuarioLogado().id);
          this.minhaSolicitacaoPendente = null;
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível cancelar sua participação, tente novamente")

        }
      )
    }


    // Area de aceitar / recusar parcitipantes


    confirmarAceitarParticipanteEvento(solicitacao) {
      let alert = this.alertCtrl.create({
        title: 'Aceitar Participante ' + solicitacao.usuario.nome,
        // inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min:3  } ],
        buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Confirmar',
            handler: () => {
              this.aceitarParticipanteEvento(solicitacao.id);

            }
          }
        ]
      });
      alert.present();
    }


    aceitarParticipanteEvento(idSolicitacao: number){
      let loading = this.loading();
      loading.present();
      this.eventoService.aceitarParticipanteEvento(idSolicitacao).subscribe(
        dados => {
          loading.dismiss();
          let i =this.solicitacoesPendentes.filter(x => x.id == idSolicitacao);
          this.participantesConfirmados.push(i[0]);
          this.solicitacoesPendentes = this.solicitacoesPendentes.filter(x => x.id != idSolicitacao);
          this.toastService.toast("Convidado Aceito!");
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível efetivar o aceite, tente novamente mais tarde.")

        }
      )
    }


    confirmarRecusarParticipanteEvento(solicitacao) {
      let alert = this.alertCtrl.create({
        title: 'Recusar Participante: ' + solicitacao.usuario.nome,
        inputs: [{ name: 'justificativa', placeholder: 'Justificativa' , min:3 } ],
        buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            handler: data => {}
          },
          {
            text: 'Confirmar',
            handler: data => {
              this.recusarParticipanteEvento(solicitacao.id, data.justificativa);

            }
          }
        ]
      });
      alert.present();
    }


    recusarParticipanteEvento(idSolicitacao: number, justificativa: string){
      let loading = this.loading();
      loading.present();
      this.eventoService.recusarParticipanteEvento(idSolicitacao, justificativa).subscribe(
        dados => {
          loading.dismiss();
          this.solicitacoesPendentes = this.solicitacoesPendentes.filter(x => x.id != idSolicitacao);
          this.toastService.toast("Usuário Recusado!");
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível recusar a solicitacao tente novamente mais tarde.")

        }
      )
    }


    confirmarRemoverParticipanteEvento(solicitacao) {
      let alert = this.alertCtrl.create({
        title: 'Remover: ' + solicitacao.usuario.nome + ' do evento',
        inputs: [{ name: 'justificativa', placeholder: 'Justificativa' , min:3 } ],
        buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            handler: data => {}
          },
          {
            text: 'Confirmar',
            handler: data => {
              this.removerParticipanteEvento(solicitacao.id, data.justificativa);

            }
          }
        ]
      });
      alert.present();
    }


    removerParticipanteEvento(idSolicitacao: number, justificativa: string){
      let loading = this.loading();
      loading.present();
      this.eventoService.removerParticipanteEvento(idSolicitacao, justificativa).subscribe(
        dados => {
          loading.dismiss();
          this.participantesPendentes = this.participantesPendentes.filter(x => x.id != idSolicitacao);
          this.participantesConfirmados = this.participantesConfirmados.filter(x => x.id != idSolicitacao);
          this.toastService.toast("Usuário Removido!");
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível remover, tente novamente mais tarde.")

        }
      )
    }

    confirmarSolicitarParticipacao(evento) {
      let alert = this.alertCtrl.create({
        title: 'Solicitar Participação',
        inputs: [{ name: 'mensagem', placeholder: 'Mensagem' , min:3 } ],
        buttons: [
          {
            text: 'Voltar',
            role: 'cancel',
            handler: data => {}
          },
          {
            text: 'Solicitar',
            handler: data => {
              this.solicitarParticipacao(evento.id, data.mensagem);

            }
          }
        ]
      });
      alert.present();
    }


    solicitarParticipacao(idEvento: number, justificativa: string){
      let loading = this.loading();
      loading.present();
      this.eventoService.solicitarParticipacao(idEvento, justificativa).subscribe(
        dados => {
          loading.dismiss();

          this.minhaSolicitacaoPendente = dados;
          this.solicitacoesPendentes.push(dados);
          this.toastService.toast("Solicitação enviada, aguarde a análise do organizador!");
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível enviar sua solicitação, tente novamente mais tarde.")

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
