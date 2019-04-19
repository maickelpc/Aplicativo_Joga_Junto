import {Component, OnInit} from '@angular/core';
import {EventoService} from "../../services/evento.service";
import {UsuarioEvento} from "../../models/evento";

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

  text: string;
  public listaEventos: UsuarioEvento[];

  constructor(private evento:EventoService) {}
  ngOnInit(): void {
    this.evento.evento().subscribe(
      response =>{
          this.listaEventos = response;
          console.log(this.listaEventos);
      },
        erro=>{

        },
      ()=>console.log('ACABO CARAI')
    );
  }

}
