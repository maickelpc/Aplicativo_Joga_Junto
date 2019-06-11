import { Component, OnInit } from '@angular/core';
import { NavController, ViewController, LoadingController, NavParams } from 'ionic-angular';
import { UsuarioService, EsporteService, LoginService } from '../../services';
import { Usuario } from '../../models/usuario';
import { Util } from '../../providers/util/util';
import { Endereco } from '../../models/endereco';
import { PerfilComponent } from '../perfil/perfil';
import { EventosComponent } from '../eventos/eventos';

/**
 * Generated class for the VisualizarPerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'visualizar-perfil',
  templateUrl: 'visualizar-perfil.html'
})
export class VisualizarPerfilComponent implements OnInit {

  ngOnInit(): void {

  }

  public rootPage: any = EventosComponent;

  public loading() {
    return this.loadingCtrl.create({
      content: 'Aguarde...',
      dismissOnPageChange: true
    });
  }

  public usuario: Usuario;
  public Util = Util;
  public esportes = [];
  public esportesUsuario = [];

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private usuarioService: UsuarioService,
    private esporteService: EsporteService,
    private loadingCtrl: LoadingController,
    private loginService : LoginService
    ) {

    this.usuario = new Usuario() }

  ionViewCanEnter() {
    console.log("Entrou no perfil do usuario");
    let loading = this.loading();
    loading.present();

          this.usuarioService.carregaUsuario(this.navParams.get('id')).subscribe(
            response =>{
              loading.dismiss();
              this.usuario = response;
              if(this.usuario.endereco == null){
                this.usuario.endereco = new Endereco();
              }
              this.buscaEsportes();


            },
            error=>{
              console.log("Erro ao Carregar Usuário: "+error);
              loading.dismiss();
            });


  }

  editarPerfil() {
    this.navCtrl.push(PerfilComponent);
  }

  voltar() {
    this.navCtrl.setRoot(EventosComponent);
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

}
