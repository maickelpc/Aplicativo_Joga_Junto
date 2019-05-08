import {Component, OnInit} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {UsuarioEvento} from "../../models/evento";
import {NavController, ViewController, MenuController} from "ionic-angular";
import {EventoComponent} from "../evento/evento";

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

  constructor(private evento:EventoService,
              public navCtrl: NavController,
              public viewCtrl: ViewController,
              public menuCtrl: MenuController) {
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
      ()=>console.log('Carregou Lista de Eventos')
    );
  }

  carregaEvento(idEvento):void {
      let param = { id: idEvento };
      this.navCtrl.push(EventoComponent, param);
  }
}
