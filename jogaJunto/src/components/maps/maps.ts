import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario';
import { Endereco } from '../../models/endereco';
import { LoadingController, NavController } from 'ionic-angular';
import { Util } from '../../providers/util/util';
import { EventoService } from '../../services/evento.service';
import { Evento } from '../../models/evento';
import { EventoComponent } from '../evento/evento';

declare var google : any;

@Component({
  selector: 'maps',
  templateUrl: 'maps.html'
})
export class MapsComponent implements OnInit {


  text: string;
  public map;
  public isMapIdle : boolean;
  public currentLocation;
  public usuario: Usuario;
  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }
  public eventosRegiao: Evento[];

  constructor(public geolocation: Geolocation,
              private usuarioService: UsuarioService,
              private evento:EventoService,
              public navCtrl: NavController,
              private loadingCtrl: LoadingController) { }

  ngOnInit(): void {
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
  }

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

    let options = {timeout : 10000 , enableHighAccuracy:true};
    let locationObs = new Observable(observable => {
      this.geolocation.getCurrentPosition(options)
      .then(resp => {
        let lat = resp.coords.latitude;
        let lng = resp.coords.longitude;
        // console.log('lat '+ lat +' == '+ 'long '+lng )
        let location = new google.maps.LatLng(lat, lng);
        // console.log('current location '+location)
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

  ionViewCanEnter() {
    let loading = this.loading();
    loading.present();
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
              // console.log(response);
              this.usuario = response;
              if(this.usuario.endereco == null){
                this.usuario.endereco = new Endereco();
              }


              // console.log(this.usuario);
              loading.dismiss();
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Usuário: "+error);
              loading.dismiss();
            });

      })
  }

  addMarker(pos, map) {
    // console.log("Add Custom Marker")

    var marker = new google.maps.Marker({
      map: map,
      animation: google.maps.Animation.DROP,
      position: pos,
      icon: Util.pathIcon('male-2.png')
    });
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

  carregaEvento(idEvento):void {
    let param = { id: idEvento };
    this.navCtrl.push(EventoComponent, param);
}
}
