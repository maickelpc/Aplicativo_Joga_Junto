import { Component, OnInit } from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {LocalService} from "../../services/local.service";
import {Evento} from "../../models/evento"
import {Esporte} from "../../models/esporte"
import {Local} from "../../models/local"
import { LoadingController, NavController, NavParams, ViewController, AlertController} from "ionic-angular"
import { ToastService } from '../../services/toast.service'
import { Util } from "../../providers/util/util";
import { EventoComponent } from '../evento/evento';

import {EventosComponent} from '../eventos/eventos'

/**
 * Generated class for the ProximosEventosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'proximos-eventos',
  templateUrl: 'proximos-eventos.html'
})
export class ProximosEventosComponent implements OnInit{

  listaEventos :  Evento[] = [];

  constructor(

    private eventoService: EventoService,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private toastService: ToastService,
    private loadingCtrl: LoadingController,
    private localService: LocalService
  ) {  }

  ionViewCanEnter(){
    let loading = this.loading();
    loading.present();

    this.eventoService.buscaMeusProximosEventos().subscribe(
      dados => {
        this.listaEventos = dados;
        loading.dismiss();
      },
      erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Erro ao buscar seus eventos, verifique sua internet e tente novamente.");
      }
    )
  }

  ngOnInit(){




  }


  confirmarCancelarParticipacao(evento) {
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
            this.cancelarParticipacao(evento, data.justificativa);

          }
        }
      ]
    });
    alert.present();
  }



  cancelarParticipacao(evento, justificativa: string){
    let loading = this.loading();
    loading.present();
    this.eventoService.cancelarParticipacao(evento.id, justificativa).subscribe(
      dados => {
        loading.dismiss();
        this.toastService.toast("Cancelamento efetivado!");
        this.listaEventos = this.listaEventos.filter(x => x.id != evento.id);
      },
      erro => {
        loading.dismiss();
        console.log(erro);
        this.toastService.toast("Não foi possível cancelar sua participação, tente novamente")

      }
    )
  }


  public visualizar(evento){

        let param = { id: evento.id };
        this.navCtrl.push(EventoComponent, param);

  }

  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }
  voltar(){
    // this.navCtrl.setRoot(EventosComponent);
    this.navCtrl.pop();
  }
}
