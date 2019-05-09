import { Util } from './../../providers/util/util';
import {Component, ViewChild, ElementRef} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {Evento} from "../../models/evento";
import {NavController, NavParams, ViewController} from "ionic-angular";

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
  @ViewChild('map') mapRef: ElementRef;

  constructor(private eventoService: EventoService,
              public navCtrl: NavController,
              public viewCtrl: ViewController,
              public navParams: NavParams) {

  }

  ionViewDidLoad() {
    // TESTE DO MAPREF console.log(this.mapRef);
  }

  ionViewCanEnter() {
      return new Promise((resolve, reject) =>{
        if (this.navParams.get('fail')) {
          reject(true)
        } else {
          this.eventoService.carregaEvento(this.navParams.get('id')).subscribe(
            response =>{
              this.evento = response;
              console.log(this.evento);
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

}
