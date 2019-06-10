import { Component, OnInit } from '@angular/core';
import { NavController, ViewController, LoadingController } from 'ionic-angular';
import { UsuarioService } from '../../services';
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

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private usuarioService: UsuarioService,
    private loadingCtrl: LoadingController
    ) {
    console.log('Hello VisualizarPerfilComponent Component');
  }

  ionViewCanEnter() {
    let loading = this.loading();
    loading.present();
      return new Promise((resolve, reject) =>{

          this.usuarioService.carregaUsuario().subscribe(
            response =>{
               console.log(response);
              this.usuario = response;
              if(this.usuario.endereco == null){
                this.usuario.endereco = new Endereco();
              }
              loading.dismiss();
              resolve(response);
            },
            error=>{
              console.log("Erro ao Carregar Usuário: "+error);
              loading.dismiss();
            });

      })
  }

  editarPerfil() {
    this.navCtrl.push(PerfilComponent);
  }

  voltar() {
    this.navCtrl.setRoot(EventosComponent);
  }
}
