webpackJsonp([5],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user__ = __webpack_require__(377);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
 Generated class for the UserProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
var UserProvider = (function () {
    function UserProvider() {
        this._user = new __WEBPACK_IMPORTED_MODULE_1__models_user__["b" /* User */]();
        console.log('Hello UserProvider Provider');
    }
    Object.defineProperty(UserProvider.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.toast = function (mensagem) {
        this.mensagem = mensagem;
        var toast = this.toastCtrl.create({
            message: mensagem,
            duration: 3000,
            position: 'top',
            showCloseButton: true
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ToastService.prototype.presentToast = function () {
        var toast = this.toastCtrl.create({
            message: this.mensagem,
            duration: 3000,
            position: 'top'
        });
        toast.onDidDismiss(function () {
        });
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast.service.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EventoService = (function () {
    function EventoService(http, login, storage) {
        this.http = http;
        this.login = login;
        this.storage = storage;
    }
    EventoService.prototype.evento = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/getEventosUsuario/", { headers: headers }).map(function (x) { return x.data; });
    };
    EventoService.prototype.carregaEvento = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/evento/" + id, { headers: headers }).map(function (x) { return x.data; });
    };
    EventoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], EventoService);
    return EventoService;
}());

//# sourceMappingURL=evento.service.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var HttpProvider = (function () {
    function HttpProvider(http) {
        this.http = http;
        this.url = './assets/mocks/';
        console.log('Hello HttpProvider Provider');
    }
    HttpProvider.prototype.get = function (path) {
        return this.http.get(this.url + path);
    };
    HttpProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], HttpProvider);
    return HttpProvider;
}());

//# sourceMappingURL=http.js.map

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 247:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/chat-room/chat-room.module": [
		709,
		0
	],
	"../pages/list-friends/list-friends.module": [
		710,
		3
	],
	"../pages/login/login.module": [
		711,
		4
	],
	"../pages/my-profile/my-profile.module": [
		712,
		2
	],
	"../pages/profile-friend/profile-friend.module": [
		713,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 247;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_util_util__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_evento_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EventoComponent = (function () {
    function EventoComponent(eventoService, navCtrl, viewCtrl, navParams) {
        this.eventoService = eventoService;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.Util = __WEBPACK_IMPORTED_MODULE_0__providers_util_util__["a" /* Util */];
    }
    EventoComponent.prototype.ionViewDidLoad = function () {
        // TESTE DO MAPREF console.log(this.mapRef);
    };
    EventoComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.navParams.get('fail')) {
                reject(true);
            }
            else {
                _this.eventoService.carregaEvento(_this.navParams.get('id')).subscribe(function (response) {
                    _this.evento = response;
                    console.log(_this.evento);
                    resolve(response);
                }, function (error) {
                    console.log("Erro ao Carregar Evento" + error);
                }, function () {
                    console.log('Carregou Informações do Evento');
                    _this.mostraMapa();
                });
            }
        });
    };
    EventoComponent.prototype.mostraMapa = function () {
        var localizacao = new google.maps.LatLng(this.evento.local.latitude, this.evento.local.longitude);
        var options = {
            center: localizacao,
            zoom: 4
        };
        var map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarker(localizacao, map);
    };
    EventoComponent.prototype.addMarker = function (pos, map) {
        console.log("Add Marker");
        return new google.maps.Marker({
            pos: pos,
            map: map
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["t" /* ElementRef */])
    ], EventoComponent.prototype, "mapRef", void 0);
    EventoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'evento',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/evento/evento.html"*/`<!-- Generated template for the EventoComponent component -->\n\n<ion-header>\n  <ion-navbar>\n      <ion-buttons left>\n          <button ion-button icon-only (click)="viewCtrl.dismiss()"></button>\n      </ion-buttons>\n\n      <ion-title>\n        Visualizar Evento\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="bg-branco">\n  <ion-row>\n    <ion-col col-5>\n      <ion-card>\n        <img [src]="Util.pathImg(evento.local.imagem)"/>\n        <ion-card-content style="background-color: white">\n          <p>\n            {{ evento.local.descricao }}\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </ion-col>\n    <ion-col col-7>\n        <p>{{ evento.descricao }}</p>\n        <p>{{ evento.esporte.nome }} </p>\n        <p>\n          <span icon-start clear small>\n            <ion-icon name="calendar">{{ evento.dataRealizacao.getDate|date:\'dd/MM/yyyy\' }}{{ evento.horario }}</ion-icon>\n          </span>\n        </p>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <div *ngFor="let p of evento.participantes" style="color: teal">\n          {{ p.nome }} \n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row padding>\n    <div id="map" #map></div>\n  </ion-row>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/evento/evento.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavParams */]])
    ], EventoComponent);
    return EventoComponent;
}());

//# sourceMappingURL=evento.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmacaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toast_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventos_eventos__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ConfirmacaoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ConfirmacaoComponent = (function () {
    function ConfirmacaoComponent(login, toast, navCtrl) {
        this.login = login;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.texto1 = '';
        this.texto2 = '';
        console.log('Hello ConfirmacaoComponent Component');
    }
    ConfirmacaoComponent.prototype.confirmar = function () {
        var _this = this;
        var codigo = this.texto1.toUpperCase() + "-" + this.texto2.toUpperCase();
        this.login.confirmar(codigo).subscribe(function (dados) {
            _this.toast.toast("Seu email foi confirmado, e sua conta ativada!");
            _this.login.ativar();
            _this.goToListaEventos();
        }, function (error) {
            console.log(error);
            _this.toast.toast("Seu código não foi aceito, verifique e tente novamente");
        });
    };
    ConfirmacaoComponent.prototype.reenviar = function () {
        var _this = this;
        this.login.reenviar().subscribe(function () { return _this.toast.toast("Email enviado, verifique sua caixa de entrada"); }, function () { return _this.toast.toast("Houve algum erro ao enviar o email, tente novamente"); });
        // toast.
    };
    ConfirmacaoComponent.prototype.goToListaEventos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventos_eventos__["a" /* EventosComponent */]);
        console.log('Vai pra página de eventos');
    };
    ConfirmacaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'confirmacao',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirmacao/confirmacao.html"*/`<!--\nGenerated template for the ListFriendsPage page.\n\nSee http://ionicframework.com/docs/components/#navigation for more info on\nIonic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ativação de Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <h2 stacked>{{ \'Activation Code\' | translate }}</h2>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-5>\n        <ion-input text-uppercase maxlength="4" type="text" [(ngModel)]="texto1"></ion-input>\n      </ion-col>\n      <ion-col col-2>\n        <h2>-</h2>\n      </ion-col>\n      <ion-col col-5>\n        <ion-input text-uppercase maxlength="4" type="text" [(ngModel)]="texto2"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <button ion-button block round color="light" icon-right\n        (click)="confirmar()"\n        [disabled]="!(texto1.length==4 && texto2.length==4)" >\n          {{ \'Activate\' | translate }} <ion-icon name="done-all"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button block round color="light" icon-right (click)="reenviar()">\n          {{ \'Resend\' | translate }} <ion-icon name="paper-plane"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/confirmacao/confirmacao.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_3__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */]])
    ], ConfirmacaoComponent);
    return ConfirmacaoComponent;
}());

//# sourceMappingURL=confirmacao.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_cidade_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_esporte_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_util_util__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PerfilComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PerfilComponent = (function () {
    function PerfilComponent(usuarioService, cidadeService, esporteService) {
        this.usuarioService = usuarioService;
        this.cidadeService = cidadeService;
        this.esporteService = esporteService;
        this.cidade = { id: 1, name: 'Tokai' };
        this.cidades = [];
        this.esportes = [];
        this.esporte = [];
        this.Util = __WEBPACK_IMPORTED_MODULE_4__providers_util_util__["a" /* Util */];
    }
    PerfilComponent.prototype.cidadeChange = function (event) {
        this.usuario.endereco.cidade.id = event.value;
        console.log('port:', event.value);
    };
    PerfilComponent.prototype.ngOnInit = function () {
    };
    PerfilComponent.prototype.buscaCidades = function () {
        var _this = this;
        this.cidadeService.buscaTodasCidades().subscribe(function (dados) {
            var data = dados.data;
            _this.cidades = data.map(function (x) {
                return { 'id': x.id, 'name': x.nome };
            });
            _this.cidade = _this.cidades.filter(function (x) { return x.id == _this.usuario.endereco.cidade.id; })[0];
            // console.log(this.cidade[0]);
        }, function (erro) {
            console.log(erro);
        });
    };
    PerfilComponent.prototype.buscaEsportes = function () {
        var _this = this;
        this.esporteService.buscaTodasEsportes().subscribe(function (dados) {
            _this.esportes = dados.data;
            console.log(_this.esportes);
            for (var i = 0; i < _this.usuario.posicoes.length; i++) {
                _this.esporte.push(_this.usuario.posicoes[i].esporte);
            }
            // this.esporte = this.esporte. maickel aqui filtrar para remover os duplicados
            // console.log(this.usuario);
            // this.esporte = this.usuario.posicoes
        });
    };
    PerfilComponent.prototype.ionViewCanEnter = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.usuarioService.carregaUsuario().subscribe(function (response) {
                // console.log(response);
                _this.usuario = response;
                // console.log(this.usuario);
                _this.buscaCidades();
                _this.buscaEsportes();
                resolve(response);
            }, function (error) {
                console.log("Erro ao Carregar Evento" + error);
            }, function () {
                console.log('Carregou Informações do Evento');
            });
        });
    };
    PerfilComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'perfil',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/perfil/perfil.html"*/`<!--\n  Generated template for the MyProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{\'My Profile\' | translate}}</ion-title>\n    <ion-buttons end>\n      <button (click)="doSubmit()" ion-button icon-only >\n        <ion-icon name="checkmark"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n\n</ion-header>\n\n\n<ion-content padding-top *ngIf="!isLoading">\n\n\n\n  <form (submit)="doSubmit()">\n    <ion-list>\n      <div text-center style="background-color: white">\n\n        <ion-avatar>\n          <img id="my-avatar" [src]="Util.pathAvatar(\'Dylan.png\')">\n        </ion-avatar>\n        <ion-item-divider  text-center>\n          <!-- <ion-icon name="information-circle"></ion-icon> -->\n          <div color="secondary">\n            <h1>{{usuario.nome}} {{usuario.sobrenome}}</h1>\n          </div>\n          <div *ngIf="usuario.endereco !== null" color="secondary">\n            <h3>{{usuario.endereco.cidade.nome}}/{{usuario.endereco.cidade.estado.sigla}}</h3>\n          </div>\n        </ion-item-divider>\n      </div>\n\n\n      <ion-item-divider color="light" text-center>\n        <h1>{{\'About me\' | translate}}</h1>\n        Sobre mim... blablablablabla\n      </ion-item-divider >\n\n      <ion-item>\n        <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n        <ion-input text-center type="text" [(ngModel)]="usuario.nome" name="username"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>{{ \'Fullname\' | translate }}</ion-label>\n        <ion-input text-center type="text" [(ngModel)]="usuario.sobrenome" name="fullname"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>{{ \'EMAIL\' | translate }}</ion-label>\n        <ion-input text-center type="email" [(ngModel)]="usuario.email"  name="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label stacked>{{\'City\' | translate}}</ion-label>\n        <ionic-selectable\n        name="cidade"\n          item-content\n          [(ngModel)]="cidade"\n          [items]="cidades"\n          itemValueField="id"\n          itemTextField="name"\n          [canSearch]="true"\n          (onChange)="cidadeChange($event)">\n        </ionic-selectable>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Esportes</ion-label>\n        <ion-select [(ngModel)]="esporte" multiple="true" name="esporte">\n          <ion-option *ngFor="let esporteLista of esportes">{{esporteLista.nome}}</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <div padding text text-center>\n        <button ion-button color="primary" icon-right>\n          {{ \'BTN.SUBMIT\' | translate }} <ion-icon name="checkmark"></ion-icon>\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/perfil/perfil.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_usuario_service__["a" /* UsuarioService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_cidade_service__["a" /* CidadeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_cidade_service__["a" /* CidadeService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_esporte_service__["a" /* EsporteService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_esporte_service__["a" /* EsporteService */]) === "function" && _c || Object])
    ], PerfilComponent);
    return PerfilComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UsuarioService = (function () {
    function UsuarioService(http, login, storage) {
        this.http = http;
        this.login = login;
        this.storage = storage;
    }
    UsuarioService.prototype.carregaUsuario = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/" + this.login.getUsuarioLogado().id, { headers: headers }).map(function (x) { return x.data; });
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], UsuarioService);
    return UsuarioService;
}());

//# sourceMappingURL=usuario.service.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_config__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CidadeService = (function () {
    function CidadeService(http, login) {
        this.http = http;
        this.login = login;
    }
    CidadeService.prototype.buscaTodasCidades = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/cidade?per_page=500", { headers: headers });
    };
    CidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]])
    ], CidadeService);
    return CidadeService;
}());

//# sourceMappingURL=cidade.service.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EsporteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_config__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EsporteService = (function () {
    function EsporteService(http, login) {
        this.http = http;
        this.login = login;
    }
    EsporteService.prototype.buscaTodasEsportes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.login.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__api_config__["a" /* API */] + "/api/esporte?withPositions=1&per_page=500", { headers: headers });
    };
    EsporteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _b || Object])
    ], EsporteService);
    return EsporteService;
    var _a, _b;
}());

//# sourceMappingURL=esporte.service.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Friend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return User; });
var Friend = (function () {
    function Friend() {
        this.username = '';
        this.fullname = '';
        this.avatar = '';
        this.email = '';
    }
    return Friend;
}());

var User = (function () {
    function User() {
        this.username = '';
        this.password = '';
        this.fullname = '';
        this.avatar = '';
        this.email = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageMocks; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageMocks = (function () {
    function MessageMocks() {
        this.items = [];
        var items = [
            {
                "from": "me",
                "to": "krod",
                "content": "Hello",
                "time": new Date()
            },
            {
                "from": "krod",
                "to": "me",
                "content": "Hi how are you ?",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "krod",
                "content": "Fine",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "krod",
                "content": "And you ?",
                "time": new Date()
            },
            {
                "from": "krod",
                "to": "me",
                "content": "Good",
                "time": new Date()
            },
            {
                "from": "me",
                "to": "woods",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "kay",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "JTS",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "harodez",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "eam",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "paden",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            },
            {
                "from": "woods",
                "to": "me",
                "content": "Hi",
                "time": new Date()
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(item);
        }
    }
    MessageMocks.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    MessageMocks.prototype.add = function (item) {
        this.items.push(item);
    };
    MessageMocks = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MessageMocks);
    return MessageMocks;
}());

//# sourceMappingURL=messageMocks.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmacao_confirmacao__ = __webpack_require__(250);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var LoginPage = (function () {
    function LoginPage(http, userProvider, menuCtrl, navCtrl, translateService, loginService, toastService, events) {
        var _this = this;
        this.http = http;
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.toastService = toastService;
        this.events = events;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.usuario = new __WEBPACK_IMPORTED_MODULE_5__models_usuario__["a" /* Usuario */]();
        this.cadastro = false;
        this.opt = 'signin';
        this.menuCtrl.enable(false);
        this.translateService.get('LOGIN_ERROR').subscribe(function (value) {
            _this.loginErrorString = value;
        });
    }
    LoginPage.prototype.maxDataNasc = function () {
        var max = new Date();
        max.setFullYear(max.getFullYear() - 18);
        return max;
    };
    LoginPage.prototype.teste = function () {
        console.log(this.loginService.getUsuarioLogado());
        this.toastService.toast("TESTE");
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.loginService.login(this.usuario.username, this.usuario.password)
            .subscribe(function (dados) {
            _this.toastService.toast("Bem Vindo " + _this.usuario.username);
            if (_this.loginService.getUsuarioLogado().email_verified_at == null) {
                _this.goToConfirmacao();
            }
            else {
                _this.events.publish('user:loggedin');
                _this.goToListaEventos();
            }
        }, function (error) {
            switch (error.status) {
                case 0:
                    _this.toastService.toast("O Servidor remoto recusou a conexão, tente novamente mais tarde");
                    break;
                case 401:
                    _this.toastService.toast("Credenciais inválidas");
                    _this.usuario.username = '';
                    _this.usuario.password = '';
                    break;
                default:
                    _this.toastService.toast("Ocorreu um erro na sua tentativa de login");
            }
            console.log(error.statusCode);
            console.log(JSON.stringify(error));
        });
    };
    LoginPage.prototype.cadastrar = function () {
        var _this = this;
        console.log(JSON.stringify(this.usuario));
        this.loginService.cadastrar(this.usuario)
            .subscribe(function (x) {
            console.log("Deu Certo " + JSON.stringify(_this.usuario));
            _this.login();
        }, function (error) {
            console.log(error);
            var erros = error.error;
            if (Array.isArray(erros)) {
                var erro = "";
                for (var i = 0; i < erros.length; i++) {
                    erro += (erros[i]) + "\n";
                }
                _this.toastService.toast(erro);
            }
            else {
                _this.toastService.toast(erros);
            }
        });
    };
    LoginPage.prototype.goToListaEventos = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__["a" /* EventosComponent */]);
        console.log('Vai pra página de eventos');
    };
    LoginPage.prototype.goToConfirmacao = function () {
        console.log('Vai pra página de confirmacao');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/`<!--<ion-header>\n\n<ion-navbar>\n<ion-title>Temo Chat Theme fo Ionic</ion-title>\n</ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content>\n  <ion-row style="background-color: white;" padding>\n    <ion-col s12>\n      <div [hidden]="cadastro" id="logo" text-center>\n        <img src="./assets/img/jogaJuntoLogo.png" width="80%">\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div padding>\n    <ion-segment [(ngModel)]="opt" color="light">\n      <ion-segment-button value="signin" (click)="cadastro = false">\n        {{ \'LOGIN\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="signup" (click)="cadastro = true">\n        {{ \'SIGNUP\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="opt" padding>\n    <form *ngSwitchCase="\'signin\'">\n\n      <ion-input type="text" [(ngModel)]="usuario.username" placeholder="{{\'Username\' | translate}}" name="username"></ion-input>\n\n      <ion-input type="password" [(ngModel)]="usuario.password" placeholder="{{\'Password\' | translate}}" name="password"></ion-input>\n\n\n      <div padding text-center>\n        <button ion-button round color="light" icon-right (click)="login()">\n          {{ \'LOGIN\' | translate }} <ion-icon name="log-in"></ion-icon>\n        </button>\n\n      </div>\n\n\n    </form>\n\n    <form  *ngSwitchCase="\'signup\'" padding>\n      <ion-item>\n        <ion-label stacked>{{ \'Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.nome" name="nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Lastname\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.sobrenome" name="sobrenome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email" name="email"></ion-input>\n      </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n          <ion-input type="text"  [(ngModel)]="usuario.username" name="username"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Password\' | translate }}</ion-label>\n          <ion-input type="password"  [(ngModel)]="usuario.password" name="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Retry Password\' | translate }}</ion-label>\n          <ion-input type="password"  [(ngModel)]="usuario.repassword" name="repassword"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{ \'Date of birth\' | translate }}</ion-label>\n          <ion-datetime pickerFormat="DD MMMM YYYY" displayFormat="DD MMMM YYYY"\n          placeholder="{{\'Select Date\' | translate}}" max="{{ maxDataNasc() | date:\'yyyy-MM-dd\' }}"\n          name="dataNascimento" [(ngModel)]="usuario.dataNascimento"></ion-datetime>\n        </ion-item>\n\n        <div padding text-center>\n          <button ion-button round color="light" icon-right (click)="cadastrar()">\n            {{ \'SIGNUP\' | translate }} <ion-icon name="person-add"></ion-icon>\n          </button>\n        </div>\n\n\n      </form>\n\n\n    </div>\n  </ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/
        })
        /**
        * @author: KMR
        * @email: yajuve.25.dz@gmail.com
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Events */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(385);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_selectable__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mocks_messageMocks__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_http_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_util_util__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_user_user__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_login_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_toast_service__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_cidade_service__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_esporte_service__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_eventos_eventos__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_confirmacao_confirmacao__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_evento_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_usuario_service__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_evento_evento__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_perfil_perfil__ = __webpack_require__(373);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_perfil_perfil__["a" /* PerfilComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_20__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_perfil_perfil__["a" /* PerfilComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_ionic_selectable__["a" /* IonicSelectableModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/chat-room/chat-room.module#ChatRoomPageModule', name: 'ChatRoomPage', segment: 'chat-room', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-friends/list-friends.module#ListFriendsPageModule', name: 'ListFriendsPage', segment: 'list-friends', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-profile/my-profile.module#MyProfilePageModule', name: 'MyProfilePage', segment: 'my-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile-friend/profile-friend.module#ProfileFriendPageModule', name: 'ProfileFriendPage', segment: 'profile-friend', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_20__components_eventos_eventos__["a" /* EventosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_confirmacao_confirmacao__["a" /* ConfirmacaoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_evento_evento__["a" /* EventoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_perfil_perfil__["a" /* PerfilComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__mocks_providers_items__["a" /* Items */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__mocks_messageMocks__["a" /* MessageMocks */],
                // Keep this to enable Ionic's runtime error handling during development
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_8_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_http_http__["a" /* HttpProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_util_util__["a" /* Util */],
                __WEBPACK_IMPORTED_MODULE_15__providers_user_user__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_16__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_17__services_toast_service__["a" /* ToastService */],
                __WEBPACK_IMPORTED_MODULE_22__services_evento_service__["a" /* EventoService */],
                __WEBPACK_IMPORTED_MODULE_23__services_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_18__services_cidade_service__["a" /* CidadeService */],
                __WEBPACK_IMPORTED_MODULE_19__services_esporte_service__["a" /* EsporteService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = (function () {
    function Usuario() {
        this.dataNascimento = new Date();
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_config__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    LoginService.prototype.today = function () {
        return new Date();
    };
    LoginService.prototype.estaLogado = function () {
        return this.usuario !== undefined;
    };
    LoginService.prototype.getUsuarioLogado = function () {
        var _this = this;
        this.storage.get('loggedUser').then(function (user) {
            _this.usuario = JSON.parse(user);
            var agora = Date.now() / 1000;
            if (_this.usuario === null || agora > _this.usuario.exp) {
                console.log(_this.usuario.exp);
                console.log("token expirado!");
                _this.logout();
            }
        });
        return this.usuario;
    };
    LoginService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/auth/login", { username: username, password: password, grant_type: 'password' }, { headers: headers }).do(function (user) {
            var data = user.token.toString().split('.');
            var userTemp = JSON.parse(atob(data[1]));
            _this.usuario = userTemp;
            _this.usuario.token = user.token.toString();
            console.log(_this.usuario);
            _this.storage.set('loggedUser', JSON.stringify(_this.usuario));
            _this.storage.get('loggedUser').then(function (user) {
                console.log('user');
            });
            console.log("Usuario Salvo na localStorage");
        });
    };
    LoginService.prototype.cadastrar = function (usuario) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario", { usuario: usuario }, { headers: headers });
    };
    LoginService.prototype.ativar = function () {
        var _this = this;
        this.storage.get('loggedUser').then(function (user) {
            _this.usuario = JSON.parse(user);
        });
        this.usuario.email_verified_at = new Date();
        this.storage.set('loggedUser', JSON.stringify(this.usuario));
    };
    LoginService.prototype.confirmar = function (codigo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Content-type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/confirmar/" + this.getUsuarioLogado().id + "/" + codigo, { headers: headers });
    };
    LoginService.prototype.reenviar = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers = headers.append('Authorization', 'Bearer ' + this.getUsuarioLogado().token);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__api_config__["a" /* API */] + "/api/usuario/reenviar/", { headers: headers });
    };
    LoginService.prototype.logout = function () {
        // window.sessionStorage.removeItem('usuario');
        this.storage.remove('loggedUser').then(function () { return console.log("Deslogado!"); });
        this.usuario = null;
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API; });
var API = 'http://localhost:8000';
//# sourceMappingURL=api.config.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Items; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__(706);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Items = (function () {
    function Items() {
        this.items = [];
        this.defaultItem = {
            "name": "Burt Bear",
            "profilePic": "assets/img/speakers/bear.jpg",
            "about": "Burt is a Bear.",
        };
        var items = [
            {
                "name": "Burt Bear",
                "profilePic": "assets/img/speakers/bear.jpg",
                "about": "Burt is a Bear."
            },
            {
                "name": "Charlie Cheetah",
                "profilePic": "assets/img/speakers/cheetah.jpg",
                "about": "Charlie is a Cheetah."
            },
            {
                "name": "Donald Duck",
                "profilePic": "assets/img/speakers/duck.jpg",
                "about": "Donald is a Duck."
            },
            {
                "name": "Eva Eagle",
                "profilePic": "assets/img/speakers/eagle.jpg",
                "about": "Eva is an Eagle."
            },
            {
                "name": "Ellie Elephant",
                "profilePic": "assets/img/speakers/elephant.jpg",
                "about": "Ellie is an Elephant."
            },
            {
                "name": "Molly Mouse",
                "profilePic": "assets/img/speakers/mouse.jpg",
                "about": "Molly is a Mouse."
            },
            {
                "name": "Paul Puppy",
                "profilePic": "assets/img/speakers/puppy.jpg",
                "about": "Paul is a Puppy."
            }
        ];
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            this.items.push(new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */](item));
        }
    }
    Items.prototype.query = function (params) {
        if (!params) {
            return this.items;
        }
        return this.items.filter(function (item) {
            for (var key in params) {
                var field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                }
                else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    };
    Items.prototype.add = function (item) {
        this.items.push(item);
    };
    Items.prototype.delete = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    Items = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Items);
    return Items;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
/**
 * A generic model that our Master-Detail pages list, create, and delete.
 *
 * Change "Item" to the noun your app will use. For example, a "Contact," or a
 * "Customer," or a "Animal," or something like that.
 *
 * The Items service manages creating instances of Item, so go ahead and rename
 * that something that fits your app as well.
 */
var Item = (function () {
    function Item(fields) {
        // Quick and dirty extend/assign fields to this model
        for (var f in fields) {
            this[f] = fields[f];
        }
    }
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_perfil_perfil__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pages__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_eventos_eventos__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(menuCtrl, userProvider, translate, platform, config, statusBar, splashScreen, events) {
        var _this = this;
        this.menuCtrl = menuCtrl;
        this.userProvider = userProvider;
        this.translate = translate;
        this.config = config;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_pages__["a" /* FirstRunPage */];
        this.pages = [
            { icon: 'contacts', title: 'Friends', component: 'ListFriendsPage' },
            { icon: 'contact', title: 'My Profile', component: 'MyProfilePage' },
            { icon: 'log-out', title: 'Logout', component: 'LoginPage' }
        ];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.initTranslate();
        events.subscribe('user:loggedin', function () {
            _this.pages = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_9__components_eventos_eventos__["a" /* EventosComponent */] },
                { title: 'Perfil', component: __WEBPACK_IMPORTED_MODULE_6__components_perfil_perfil__["a" /* PerfilComponent */] },
                { title: 'Logout', component: null }
            ];
            _this.menuCtrl.enable(true);
        });
        events.subscribe('user:loggedout', function () {
            _this.pages = [
                { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */] }
            ];
            _this.menuCtrl.enable(false);
        });
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["l" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/app/main.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Joga Junto</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class="bg-branco">\n\n    <div padding text-center>\n      <img id="my-avatar" src="./assets/avatar/Raouf.png">\n      <h4 ion-text>{{ userProvider.user.fullname }}</h4>\n    </div>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        <ion-icon [name]="p.icon"></ion-icon> {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n<ion-nav #content [root]="rootPage" persistent=“true”></ion-nav>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/app/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* MenuController */], __WEBPACK_IMPORTED_MODULE_8__providers_user_user__["a" /* UserProvider */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["o" /* Platform */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* Events */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstRunPage; });
// The page the user lands on after opening the app and without a session
var FirstRunPage = 'LoginPage';
//# sourceMappingURL=pages.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_evento_service__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__evento_evento__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the EventosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EventosComponent = (function () {
    function EventosComponent(evento, navCtrl, viewCtrl, menuCtrl) {
        this.evento = evento;
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.menuCtrl = menuCtrl;
        this.menuCtrl.enable(true);
    }
    EventosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.evento.evento().subscribe(function (response) {
            _this.listaEventos = response;
            console.log(_this.listaEventos);
        }, function (erro) {
        }, function () { return console.log('Carregou Lista de Eventos'); });
    };
    EventosComponent.prototype.carregaEvento = function (idEvento) {
        var param = { id: idEvento };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__evento_evento__["a" /* EventoComponent */], param);
    };
    EventosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'eventos',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/eventos/eventos.html"*/`<!-- Generated template for the EventosComponent component -->\n\n<ion-header>\n  <ion-navbar hideBackButton="true">\n    <button ion-button icon-only menuToggle style="display: block !important;" color="primary">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n\n      <ion-title center class="titleicon toolbar-background">\n        <img src="./assets/img/jogaJuntoLogo.png" style="display:inline-block" height="50px" />\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="bg-branco" *ngFor="let evento of listaEventos">\n    <ion-card-content>\n      <ion-card-title>\n          {{ evento.evento.descricao }}\n      </ion-card-title>\n      <ion-row>\n        <ion-col>\n          <span icon-start clear small>\n            <ion-icon name="calendar">{{ evento.evento.dataRealizacao|date:\'dd/MM/yyyy\' }}</ion-icon>\n          </span>\n        </ion-col>\n        <ion-col>\n          <span icon-start clear small>\n            <ion-icon name="alarm">{{ evento.evento.horario }}</ion-icon>\n          </span>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col align-self-center>\n          <button ion-button icon-start clear medium (click)="carregaEvento(evento.evento.id)">\n            <ion-icon name="stats"></ion-icon>\n            <div>Detalhes</div>\n          </button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/components/eventos/eventos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_evento_service__["a" /* EventoService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* MenuController */]])
    ], EventosComponent);
    return EventosComponent;
}());

//# sourceMappingURL=eventos.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Util; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Author : KM.Raouf
  Email : yajuve.25.dz@gmail.com
*/
var Util = (function () {
    function Util() {
        console.log('Hello UtilProvider Provider');
    }
    Util.pathAvatar = function (name) {
        return './assets/avatar/' + name;
    };
    Util.pathImg = function (name) {
        return './assets/img/' + name;
    };
    Util = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Util);
    return Util;
}());

//# sourceMappingURL=util.js.map

/***/ })

},[380]);
//# sourceMappingURL=main.js.map