import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform, Events, MenuController } from 'ionic-angular';
import { PerfilComponent } from '../components/perfil/perfil'

import { FirstRunPage } from '../pages/pages';
import { UserProvider} from "../providers/user/user";
import { EventosComponent } from '../components/eventos/eventos';
import { ConfirmaParticipacaoComponent } from '../components/confirma-participacao/confirma-participacao';
import { LogoutComponent } from '../components/logout/logout';
import { UsuarioService} from '../services/usuario.service'
import { LoginService } from '../services';
import { Util } from '../providers/util/util';
import { Usuario } from '../models/usuario';
import { VisualizarPerfilComponent } from '../components/visualizar-perfil/visualizar-perfil';

import { LocalComponent} from '../components/local/local';

@Component({
  templateUrl: 'main.html'
})
export class MyApp {
  rootPage = 'LoginPage';

  @ViewChild(Nav) nav: Nav;
  public Util = Util;
  public usuario: Usuario;

  pages: any[] = [
    { icon: 'contacts', title: 'Friends', component: 'ListFriendsPage' },
    { icon: 'contact', title: 'My Profile', component: 'MyProfilePage' },
    { icon: 'log-out', title: 'Logout', component: 'LoginPage' },

  ];

  constructor(
    public menuCtrl: MenuController,
    public userProvider: UserProvider,
    private translate: TranslateService,
    platform: Platform,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    events:Events,
    private usuarioService: UsuarioService,
    public loginService: LoginService) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.initTranslate();

    events.subscribe('user:loggedin',()=>{
      this.pages = [
                    {title:'Home', component: EventosComponent, icon: 'home'},
                    {title:'Perfil', component: VisualizarPerfilComponent, icon: 'contact'},
                    {title:'Locais', component: LocalComponent, icon: 'pin'},
                    {icon: 'log-out', title:'Sair', component: LogoutComponent},

                    ];
                    this.menuCtrl.enable(true);
                    this.usuario = loginService.getUsuarioLogado();
                    // console.log(this.usuario);

    });

      events.subscribe('user:loggedout',()=>{
      this.pages = [
                    {title:'Login', component: LoginPage}
                    ];
                    this.menuCtrl.enable(false);
    });

  }

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    }
    else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
