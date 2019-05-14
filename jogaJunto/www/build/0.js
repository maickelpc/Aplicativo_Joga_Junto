webpackJsonp([0],{

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatRoomPageModule", function() { return ChatRoomPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_room__ = __webpack_require__(712);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatRoomPageModule = (function () {
    function ChatRoomPageModule() {
    }
    ChatRoomPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_room__["a" /* ChatRoomPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_room__["a" /* ChatRoomPage */]),
            ],
        })
    ], ChatRoomPageModule);
    return ChatRoomPageModule;
}());

//# sourceMappingURL=chat-room.module.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatRoomPage; });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__(167);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_util_util__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_http_http__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__ = __webpack_require__(232);
>>>>>>> b2c89939d7602d6d1e2ac82b035ef7da13355935
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_messageMocks__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_message__ = __webpack_require__(713);
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
 * Generated class for the ChatRoomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatRoomPage = (function () {
    function ChatRoomPage(msgMocks, http, navCtrl, navParams) {
        this.msgMocks = msgMocks;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Util = __WEBPACK_IMPORTED_MODULE_2__providers_util_util__["a" /* Util */];
        this.friend = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* Friend */]();
        this.myProfile = new __WEBPACK_IMPORTED_MODULE_3__models_user__["b" /* User */]();
        this.input = '';
        this.isLoading = true;
    }
    ChatRoomPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.isLoading = true;
        this.messages = this.msgMocks.items;
        this.friend = this.navParams.get('friend');
        Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_observable_forkJoin__["forkJoin"])(this.http.get('my-profile.json')).subscribe(function (_a) {
            var profile = _a[0];
            _this.isLoading = false;
            _this.myProfile = profile;
        });
    };
    ChatRoomPage.prototype.ionViewWillEnter = function () {
        this.scrollToBottom();
    };
    ChatRoomPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom(300);
        });
    };
    ChatRoomPage.prototype.doSend = function () {
        if (this.input.length > 0) {
            var message = new __WEBPACK_IMPORTED_MODULE_7__models_message__["a" /* Message */]();
            message.to = this.friend.username;
            message.from = 'me';
            message.content = this.input;
            this.msgMocks.add(message);
            this.scrollToBottom();
            this.input = '';
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], ChatRoomPage.prototype, "content", void 0);
    ChatRoomPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-room',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/chat-room/chat-room.html"*/`<!--\n  Generated template for the ChatRoomPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ friend.fullname }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="!isLoading">\n\n  <div class="message-wrap">\n\n    <div *ngFor="let msg of messages">\n\n      <div class="sender" *ngIf="msg.from == friend.username && msg.to == \'me\' ">\n\n        <ion-grid>\n          <ion-row>\n            <ion-col col-2 text-left>\n              <img class="friend-img" [src]="Util.pathAvatar(friend.avatar)" alt="">\n            </ion-col>\n            <ion-col col-10>\n              <p>{{msg.content}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <div class="me" *ngIf="msg.from == \'me\' && msg.to == friend.username">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-10>\n              <p>{{msg.content}}</p>\n            </ion-col>\n            <ion-col col-2>\n              <img class="friend-img" [src]="Util.pathAvatar(myProfile.avatar)" alt="">\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </div>\n\n</ion-content>\n\n<ion-footer no-border>\n  <ion-toolbar color="primary">\n    <ion-textarea (keyup.enter)="doSend()" [(ngModel)]="input" placeholder="Enter your message" name="message"></ion-textarea>\n    <ion-buttons end>\n      <button (click)="doSend()" ion-button icon-only >\n        <ion-icon name="send" color="light"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n\n</ion-footer>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/chat-room/chat-room.html"*/,
        })
        /**
         * @author: KMR
         * @email: yajuve.25.dz@gmail.com
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__mocks_messageMocks__["a" /* MessageMocks */], __WEBPACK_IMPORTED_MODULE_4__providers_http_http__["a" /* HttpProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavParams */]])
    ], ChatRoomPage);
    return ChatRoomPage;
}());

//# sourceMappingURL=chat-room.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Message; });
var Message = (function () {
    function Message() {
        this.from = '';
        this.to = '';
        this.content = '';
    }
    return Message;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=0.js.map