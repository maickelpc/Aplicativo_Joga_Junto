webpackJsonp([0],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_user__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_usuario__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_login_service__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_toast_service__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_eventos_eventos__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_confirmacao_confirmacao__ = __webpack_require__(232);
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
    function LoginPage(http, userProvider, menuCtrl, navCtrl, translateService, loginService, toastService) {
        var _this = this;
        this.http = http;
        this.userProvider = userProvider;
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.loginService = loginService;
        this.toastService = toastService;
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
                _this.goToListaEventos();
            }
        }, function (error) {
            _this.toastService.toast("Credenciais inválidas");
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
            selector: 'page-login',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/`<!--<ion-header>\n\n<ion-navbar>\n<ion-title>Temo Chat Theme fo Ionic</ion-title>\n</ion-navbar>\n\n</ion-header>-->\n\n\n<ion-content padding>\n\n  <div [hidden]="cadastro" id="logo" padding text-center>\n\n    <img src="./assets/img/logo.png">\n  </div>\n\n  <div padding>\n    <ion-segment [(ngModel)]="opt" color="light">\n      <ion-segment-button value="signin" (click)="cadastro = false">\n        {{ \'LOGIN\' | translate }}\n      </ion-segment-button>\n      <ion-segment-button value="signup" (click)="cadastro = true">\n        {{ \'SIGNUP\' | translate }}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div [ngSwitch]="opt">\n    <form *ngSwitchCase="\'signin\'">\n\n      <ion-input type="text" [(ngModel)]="usuario.username" placeholder="{{\'Username\' | translate}}" name="username"></ion-input>\n\n      <ion-input type="password" [(ngModel)]="usuario.password" placeholder="{{\'Password\' | translate}}" name="password"></ion-input>\n\n\n      <div padding text-center>\n        <button ion-button round color="light" icon-right (click)="login()">\n          {{ \'LOGIN\' | translate }} <ion-icon name="log-in"></ion-icon>\n        </button>\n\n      </div>\n\n\n    </form>\n\n    <form  *ngSwitchCase="\'signup\'">\n      <ion-item>\n        <ion-label stacked>{{ \'Name\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.nome" name="nome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Lastname\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="usuario.sobrenome" name="sobrenome"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>{{ \'Email\' | translate }}</ion-label>\n        <ion-input type="email" [(ngModel)]="usuario.email" name="email"></ion-input>\n      </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Username\' | translate }}</ion-label>\n          <ion-input type="text"  [(ngModel)]="usuario.username" name="username"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Password\' | translate }}</ion-label>\n          <ion-input type="password"  [(ngModel)]="usuario.password" name="password"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label stacked>{{ \'Retry Password\' | translate }}</ion-label>\n          <ion-input type="password"  [(ngModel)]="usuario.repassword" name="repassword"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>{{ \'Date of birth\' | translate }}</ion-label>\n          <ion-datetime pickerFormat="DD MMMM YYYY" displayFormat="DD MMMM YYYY"\n          placeholder="{{\'Select Date\' | translate}}" max="{{ maxDataNasc() | date:\'yyyy-MM-dd\' }}"\n          name="dataNascimento" [(ngModel)]="usuario.dataNascimento"></ion-datetime>\n        </ion-item>\n\n        <div padding text-center>\n          <button ion-button round color="light" icon-right (click)="cadastrar()">\n            {{ \'SIGNUP\' | translate }} <ion-icon name="person-add"></ion-icon>\n          </button>\n        </div>\n\n\n      </form>\n\n\n    </div>\n  </ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/login/login.html"*/
        })
        /**
        * @author: KMR
        * @email: yajuve.25.dz@gmail.com
        */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_user_user__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_6__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_7__services_toast_service__["a" /* ToastService */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 347:
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

/***/ })

});
//# sourceMappingURL=0.js.map