import {Component, OnInit} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {UsuarioEvento, Evento} from "../../models/evento";
import {NavController, ViewController, MenuController, LoadingController} from "ionic-angular";
import {EventoComponent} from "../evento/evento";
import {MapsComponent} from "../../components/maps/maps";
import { Usuario } from '../../models/usuario';
import { Endereco } from '../../models/endereco';
import { UsuarioService } from '../../services';
import {CriarEventoComponent} from "../criar-evento/criar-evento";

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

  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }
  constructor(private evento:EventoService,
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
          console.log(this.listaEventos);
      },
        erro=>{

        },
      ()=>console.log('Carregou Lista de Eventos do Usuário')
    );
    console.log("Entrando na tela de listagem de eventos");
    this.evento.evento().subscribe(
      response =>{
          this.listaEventos = response;
          console.log(this.listaEventos);
      },
        erro=>{

        },
      ()=>console.log('Carregou Lista de Eventos')
    );
    console.log("Entrando na tela de listagem de eventos");
    this.evento.evento().subscribe(
      response =>{
          this.listaEventos = response;
          console.log(this.listaEventos);
      },
        erro=>{

        },
      ()=>console.log('Carregou Lista de Eventos')
    );
  }

  carregaEvento(idEvento):void {
      let param = { id: idEvento };
      this.navCtrl.push(EventoComponent, param);
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

      });
    }
  criarNovoEvento(){
    this.navCtrl.push(CriarEventoComponent);
  }
}
