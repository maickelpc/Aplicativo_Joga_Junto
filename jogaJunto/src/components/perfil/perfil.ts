import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { UsuarioService } from '../../services/usuario.service'
import { CidadeService } from '../../services/cidade.service'
import { EsporteService } from '../../services/esporte.service'
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

  public cidade : any = { id: 1, name: 'Tokai' };
  public cidades = [];

  public esportes = [];
  public esporte = []

  cidadeChange(event: {
    component: IonicSelectableComponent,
    value: number
  }) {
    this.usuario.endereco.cidade.id = event.value;
    console.log('port:', event.value);
  }


  public usuario: Usuario;
  public Util = Util;

  constructor(
    private usuarioService: UsuarioService,
    private cidadeService: CidadeService,
    private esporteService: EsporteService) {
  }

  ngOnInit(){

  }

  buscaCidades(){
    this.cidadeService.buscaTodasCidades().subscribe(
      dados => {

        let data = dados.data;
        this.cidades = data.map( function(x){

          return {'id': x.id,'name': x.nome}
        });
        this.cidade = this.cidades.filter(x => x.id == this.usuario.endereco.cidade.id)[0];

        // console.log(this.cidade[0]);
      },
      erro => {
        console.log(erro);

      }
    );
  }

  buscaEsportes(){
    this.esporteService.buscaTodasEsportes().subscribe(
      dados => {
        this.esportes = dados.data;
        console.log(this.esportes);
        for(let i = 0; i < this.usuario.posicoes.length; i++){
          this.esporte.push(this.usuario.posicoes[i].esporte);
        }
        // this.esporte = this.esporte. maickel aqui filtrar para remover os duplicados
        // console.log(this.usuario);
        // this.esporte = this.usuario.posicoes
      }
    )
  }

  ionViewCanEnter() {
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
              // console.log(response);
              this.usuario = response;
              // console.log(this.usuario);
              this.buscaCidades();
              this.buscaEsportes();
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
