import {Component, OnInit} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import { Geolocation } from '@ionic-native/geolocation';
import {UsuarioEvento, Evento} from "../../models/evento";
import {NavController, ViewController, MenuController, LoadingController} from "ionic-angular";
import {EventoComponent} from "../evento/evento";
import { Usuario } from '../../models/usuario';
import { Endereco } from '../../models/endereco';
import { UsuarioService } from '../../services';
import {CriarEventoComponent} from "../criar-evento/criar-evento";
import {ConfirmaParticipacaoComponent} from '../confirma-participacao/confirma-participacao'
import { ProximosEventosComponent } from '../proximos-eventos/proximos-eventos';
import { Observable } from 'rxjs/Observable';
import { Util } from '../../providers/util/util';

declare var google : any;
/**
 * Generated class for the EventosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'eventos',
  templateUrl: 'eventos.html'
})
export class EventosComponent implements OnInit{

  public listaEventos: UsuarioEvento[];
  public usuario: Usuario;
  public eventosRegiao: Evento[];
  public isMapIdle : boolean;
  public currentLocation;
  public map;

  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }
  constructor(private evento:EventoService,
              public geolocation: Geolocation,
              private usuarioService: UsuarioService,
              public navCtrl: NavController,
              public viewCtrl: ViewController,
              public menuCtrl: MenuController,
              private loadingCtrl: LoadingController) {
                  this.menuCtrl.enable(true);

              }
  ngOnInit(): void {
    this.evento.evento().subscribe(
      response =>{
          this.listaEventos = response;
          // console.log(this.listaEventos);
      },
        erro=>{
          console.log(erro);
        }
    );
  }

  carregaEvento(idEvento):void {
      let param = { id: idEvento };
      this.navCtrl.push(EventoComponent, param);
  }

  ionViewWillEnter() {
    let loading = this.loading();
    loading.present();
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario(0).subscribe(
            response =>{
              console.log(response);
              console.log('carregou usuario');
              this.usuario = response;
              if(this.usuario.endereco == null){
                this.usuario.endereco = new Endereco();
              }
              this.map =this.createMap();
              this.addMapEventListeners();

              this.getCurrentLocation().subscribe(location => {
                this.map.setCenter(location);
              });

              this.evento.eventosRegiao().subscribe(
                response =>{
                    this.eventosRegiao = response;
                    // console.log(this.eventosRegiao);
                    this.addMarkers(this.map);
                },
                  erro=>{
                    console.log("Erro ao buscar eventos na regiao");
                    console.log(erro);
                  }
              );
              let lat = this.usuario.latitude;
              let lng = this.usuario.longitude;
              let location = new google.maps.LatLng(lat, lng);
              this.addMarker(location, this.map);
              this.centerLocation(location);
              loading.dismiss();
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Usuário: "+error);
              loading.dismiss();
            });

      });
  }

  criarNovoEvento(){
    this.navCtrl.push(CriarEventoComponent);
  }

  notificacoes(){
    this.navCtrl.push(ConfirmaParticipacaoComponent);
  }

  agenda(){
    this.navCtrl.push(ProximosEventosComponent);
  }

  //start map

  createMap(location = new google.maps.LatLng(40.712784,-74.005942)){
    // console.log('init location ' + location)
    let mapOptions = {
      center: location,
      zoom:15,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
      disableDefaultUI:true
    }
    let mapEl = document.getElementById("map");
    let map = new google.maps.Map(mapEl,mapOptions);

    return map;
  }

  centerLocation(location){
    if(location){
      this.map.setCenter(location);
    }
    else{
      this.getCurrentLocation().subscribe(currentLocation => {
        this.map.setCenter(currentLocation);
      })
    }
  }

  getCurrentLocation() {

    let opt = {timeout : 10000 , enableHighAccuracy:true};
    let locationObs = new Observable(observable => {
      this.geolocation.getCurrentPosition(opt)
      .then(resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
        let location = new google.maps.LatLng(lat, lng);
        observable.next(location);

        this.addMarker(location, this.map);
      })
    })

    return locationObs;
  }

  addMapEventListeners(){
    google.maps.event.addListener(this.map, 'dragstart', () => {
      this.isMapIdle = false;
    })
    google.maps.event.addListener(this.map, 'idle', () => {
      this.isMapIdle = true;
    })
  }

  addMarker(pos, map) {
    // console.log("Add Custom Marker")

    var bounds = new google.maps.LatLngBounds();
    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: pos,
      icon: Util.pathIcon('male-2.png')
    });
    bounds.extend(marker.getPosition());
    map.fitBounds(bounds);
  }

  addMarkers(map) {
    var bounds = new google.maps.LatLngBounds();
    var markers = [];
    var marker;
    var self = this;

    for (var i = 0; i < this.eventosRegiao.length; i++) {

        var latLng = new google.maps.LatLng(this.eventosRegiao[i].local.latitude, this.eventosRegiao[i].local.longitude);
        marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: this.eventosRegiao[i].descricao,
            icon: Util.pathIcon(this.eventosRegiao[i].esporte.imagem)
        });
        markers.push(marker);
        var idEvento = this.eventosRegiao[i].id;
        google.maps.event.addListener(marker, 'click', (function(marker, i, idEvento) {
          return function() {
              self.carregaEvento(idEvento);
          }
        })(marker, i, idEvento));
        bounds.extend(marker.getPosition());
        map.fitBounds(bounds);
        //console.log(this.eventosRegiao[i].esporte.imagem);
    }
  }


}
