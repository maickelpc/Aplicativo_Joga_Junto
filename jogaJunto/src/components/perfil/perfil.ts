import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../../services/usuario.service'
import {Util} from "../../providers/util/util";
import { IonicSelectableComponent } from 'ionic-selectable';

/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class PerfilComponent implements OnInit{

  public port : any = { id: 1, name: 'Tokai' };
  public ports = [];

  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }


  public usuario: Usuario;
  public Util = Util;

  constructor(private usuarioService: UsuarioService) {
    this.ports = [
      { id: 1, name: 'Tokai' },
      { id: 2, name: 'Vladivostok' },
      { id: 3, name: 'Navlakhi' }
    ];
  }

  ngOnInit(){

  }

  ionViewCanEnter() {
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
              console.log(response);
              this.usuario = response;
              console.log(this.usuario);
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Evento"+error)
            },
            ()=> {
              console.log('Carregou Informações do Evento');
            });

      })
  }

}
