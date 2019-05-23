import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario'
import { Esporte,Posicao } from '../../models/esporte'
import { UsuarioService } from '../../services/usuario.service'
import { CidadeService } from '../../services/cidade.service'
import { EsporteService } from '../../services/esporte.service'
import { Util } from "../../providers/util/util";
import { IonicSelectableComponent } from 'ionic-selectable';
import { ToastService } from '../../services/toast.service'
import { LoadingController } from 'ionic-angular';
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

  public aba = 'dados';

  public cidade : any = { id: 1, name: 'Tokai' };
  public cidades = [];

  public esportes = [];
  public esportesUsuario = [];


  cidadeChange(event: {
    component: IonicSelectableComponent,
    value: number
  }) {
    this.usuario.endereco.cidade.id = event.value['id'];
    // console.log('idcidade:', event.value);
  }

  public posicoesSelecionadas : any;
  public usuario: Usuario;
  public Util = Util;
  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }

  constructor(
    private usuarioService: UsuarioService,
    private cidadeService: CidadeService,
    private esporteService: EsporteService,
    private toastService: ToastService,
    private loadingCtrl: LoadingController) {
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
        //this.cidade = this.cidades.filter(x => x.id == this.usuario.endereco.cidade.id)[0];

        this.cidade = {'id': this.usuario.endereco.cidade.id, 'name': this.usuario.endereco.cidade.nome};

      },
      erro => {
        console.log(erro);

      }
    );
  }

  filtraEsportePorId(id):boolean{
    if (this.usuario.posicoes.map(x => x.esporte_id).indexOf(id) >= 0 )
      return true;
    else
      return false;
  }

  buscaEsportes(){
    this.esporteService.buscaTodasEsportes().subscribe(
      dados => {
        this.esportes = dados.data;
        this.esportesUsuario = this.esportes.filter(value => this.filtraEsportePorId(value.id));
        this.esportes = this.esportes.filter(value => !this.filtraEsportePorId(value.id));
      }
    )
  }

  adicionaEsporte(esporte){
    console.log(this.esportes);
    this.esportes = this.esportes.filter(x => x.id != esporte.id);
    console.log(this.esportes);
    this.esportesUsuario.push(esporte);
  }

  atualizaPosicoes(event, idEsporte){
    // console.log(idEsporte);
     console.log(this.usuario.posicoes);
    // let idEsporte = event[0].esporte_id;
    this.usuario.posicoes = this.usuario.posicoes.filter(x => x.esporte_id != idEsporte);

    for(let i =0; i < event.length; i++){
      this.usuario.posicoes.push(event[i]);
    }
     console.log(this.usuario.posicoes);
  }

  possuiPosicao(posicao: number){
    // console.log(posicao + ' - ' + (this.usuario.posicoes.map(x => x.id).indexOf(posicao) >= 0));
    return (this.usuario.posicoes.map(x => x.id).indexOf(posicao) >= 0);
  }

  salvar(){
   var loading =   this.loading();
   loading.present();
    this.usuarioService.salvarUsuario(this.usuario).subscribe(
      dados => {
        this.toastService.toast("Dados salvos com sucesso!");
      },
      erro => {
        this.toastService.toast("Erro ao salvar os dados");
        console.log(erro);
      },
      () => loading.dismiss()
    );
  }

  buscaCep(){
    this.usuarioService.buscarCep(this.usuario.endereco.cep).subscribe(
      dados => {
        this.usuario.endereco.logradouro = dados.logradouro;
        this.usuario.endereco.bairro = dados.bairro;
        this.cidadeService.buscaPorIbge(dados.ibge).subscribe(
          dados => {
            console.log(dados);
            this.usuario.endereco.cidade = dados;
            this.cidade.id = dados.id;
            this.cidade.name = dados.nome;
          },
          erro => console.log(erro)
        )
      },
      erro => {
        this.toastService.toast("Não localizamos o cep informado!");
      }
    );
  }

  ionViewCanEnter() {
    let loading = this.loading();
    loading.present();
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
              // console.log(response);
              this.usuario = response;

              console.log(this.usuario);
              this.buscaCidades();
              this.buscaEsportes();
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Evento: "+error)
            },
            ()=> {
              console.log('Carregou Informações do Evento');
              loading.dismiss();
            });

      })
  }

}
