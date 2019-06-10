import { Component , OnInit} from '@angular/core';
import { ToastService } from '../../services/toast.service'
import { LoadingController ,ViewController, NavController, AlertController } from 'ionic-angular';
import { EsporteService } from '../../services/esporte.service'
import { LocalService } from '../../services/local.service'
import { LoginService } from '../../services/login.service'
import { EventosComponent } from '../eventos/eventos'
import { Esporte } from '../../models/esporte'
import { Local } from '../../models/local'
import { IonicSelectableComponent } from 'ionic-selectable';
import { Geolocation } from '@ionic-native/geolocation';
/**
* Generated class for the LocalComponent component.
*
* See https://angular.io/api/core/Component for more info on Angular
* Components.
*/
@Component({
  selector: 'local',
  templateUrl: 'local.html'
})
export class LocalComponent implements OnInit{

  aba = 'locais';
  meusLocais = [];
  buscaLocais = [];
  local: Local;
  search = '';
  meuId: number;
  esportes = [];
  watch = this.geolocation.watchPosition();
  buscas = 0;


  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private localService: LocalService,
    private esporteService: EsporteService,
    private geolocation: Geolocation,
    private toastService: ToastService,
    private loginService: LoginService,
    private loadingCtrl: LoadingController) {

    }

    ngOnInit(){
      let loading = this.loading();
      loading.present();
      this.buscas = 2;

      this.meuId = this.loginService.getUsuarioLogado().id;

      this.esporteService.buscaTodasEsportes().subscribe(
        dados => {
          this.esportes =  dados.data;
        },
        erro => console.log(erro),
        () => {
          this.buscas--;
          if(this.buscas == 0)
          loading.dismiss();
        }
      );

      this.localService.buscaMeusLocais().subscribe(
        dados => {
          this.meusLocais =  dados;
        },
        erro => console.log(erro),
        () => {
          this.buscas--;
          if(this.buscas == 0)
          loading.dismiss();
        }
      );

    }

    gerenciar(id){
      this.local = this.meusLocais.filter(x => x.id == id)[0];
      this.aba = 'editar';
    }

    naoSalvar(){
      this.local = null;
      this.aba = 'locais';
    }


    buscarLocaisSemConfirmacao(){

      let loading = this.loading();
      loading.present();

      this.localService.buscarLocaisSemConfirmacao(this.search, '').subscribe(
        dados => {
          this.buscaLocais = dados;
          loading.dismiss();
        },
        erro => {
          console.log(erro);
          loading.dismiss();
        }

      )


    }


    confirmarRequisitar(local) {
      let alert = this.alertCtrl.create({
        title: 'Requisitar ' + local.nome,
        // inputs: [{ name: 'justificativa', placeholder: 'Justificativa', min:3  } ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: data => {
              // console.log('Cancel clicked');
            }
          },
          {
            text: 'Requisitar',
            handler: data => {
              this.requisitarLocal(local);
            }
          }
        ]
      });
      alert.present();
    }


    requisitarLocal(local){
      let loading = this.loading();
      loading.present();
      this.localService.requisitarLocal(local.id).subscribe(
        dados => {
          local.usuarioResponsavel_id = this.meuId;
          loading.dismiss();
          this.toastService.toast("O Local foi requisitado, aguarde contato dos administradores!");
        },
        erro => {
          loading.dismiss();
          console.log(erro);
          this.toastService.toast("Não foi possível requisitar o local, tente novamente")

        }
      )
    }


    atualizaEsportes(esportes){
      this.local.esportes = esportes;
    }

    possuiEsporte(id){
      return  this.local.esportes.filter(x => x.id == id).length > 0;

    }

    salvar(){

      let loading = this.loading();
      loading.present();

      this.localService.atualizar(this.local).subscribe(
        dados => {
          loading.dismiss();
          this.toastService.toast("Alterações salvas com sucesso!");
          this.meusLocais = this.meusLocais.filter(x => x.id != this.local.id);
          this.meusLocais.push(this.local);
          this.local = null;
          this.aba = 'locais';
        },
        erro => {
          loading.dismiss();
          this.toastService.toast("Erro ao atualizar os dados do local, tente novamente");

        }
      )

    }


    atualizarGps(){
      let loading = this.loading();
      loading.present();

      this.geolocation.getCurrentPosition().then((resp) => {
       let lat = resp.coords.latitude;
       let long = resp.coords.longitude;
       this.localService.atualizarGps(this.local.id, lat, long).subscribe(
         dados => {
           loading.dismiss();
           this.toastService.toast("Coordenadas atualizadas com sucesso");
         },
         erro =>{
           loading.dismiss();
           this.toastService.toast("Erro ao atualizar as coordenadas, tente novamente mais tarde.");
         }
       )


      }).catch((error) => {
        this.toastService.toast("Erro ao ler as coordenadas, verifique seu GPS e tente novamente!")
        loading.dismiss();
        console.log('Error getting location', error);
      });

      //
      //
      // this.watch.subscribe(
      //   data => {
      //     let lat = data.coords.latitude;
      //     let long = data.coords.longitude;
      //     alert(lat);
      //     alert(long);
      //     console.log(lat);
      //     console.log(long);
      //
      //   },erro => console.log(erro)
      // );


    }














    public loading() {
      return this.loadingCtrl.create({
        content: 'Aguarde...',
        dismissOnPageChange: true
      });
    }

    voltar(){
      this.navCtrl.setRoot(EventosComponent);
      // this.viewCtrl.dismiss().then()
    }

  }
