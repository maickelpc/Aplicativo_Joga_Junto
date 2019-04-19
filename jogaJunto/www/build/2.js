webpackJsonp([2],{

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFriendPageModule", function() { return ProfileFriendPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_friend__ = __webpack_require__(347);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfileFriendPageModule = (function () {
    function ProfileFriendPageModule() {
    }
    ProfileFriendPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile_friend__["a" /* ProfileFriendPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile_friend__["a" /* ProfileFriendPage */]),
            ],
        })
    ], ProfileFriendPageModule);
    return ProfileFriendPageModule;
}());

//# sourceMappingURL=profile-friend.module.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileFriendPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_user__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_util_util__ = __webpack_require__(225);
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
 * Generated class for the ProfileFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfileFriendPage = (function () {
    function ProfileFriendPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Util = __WEBPACK_IMPORTED_MODULE_3__providers_util_util__["a" /* Util */];
        this.profile = new __WEBPACK_IMPORTED_MODULE_2__models_user__["a" /* Friend */]();
    }
    ProfileFriendPage.prototype.ionViewDidLoad = function () {
        this.profile = this.navParams.get('friend');
    };
    ProfileFriendPage.prototype.goToChatRoom = function () {
        this.navCtrl.push('ChatRoomPage', { friend: this.profile });
    };
    ProfileFriendPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile-friend',template:/*ion-inline-start:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/profile-friend/profile-friend.html"*/`<!--\n  Generated template for the ProfileFriendPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ profile.fullname }}</ion-title>\n    <ion-buttons end>\n      <button (click)="goToChatRoom()" ion-button icon-only >\n        <ion-icon name="chatboxes"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding-top>\n\n  <div text-center>\n    <img id="friend-avatar" [src]="Util.pathAvatar(profile.avatar)">\n  </div>\n\n  <ion-list>\n    <ion-item-group>\n      <ion-item-divider color="light" text-center>Full name</ion-item-divider>\n      <ion-item>{{ profile.fullname }}</ion-item>\n    </ion-item-group>\n    <ion-item-group>\n      <ion-item-divider color="light" text-center>Username</ion-item-divider>\n      <ion-item>{{ profile.username }}</ion-item>\n    </ion-item-group>\n  </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"/var/www/html/projeto-integrador-mobile/jogaJunto/src/pages/profile-friend/profile-friend.html"*/,
        })
        /**
         * @author: KMR
         * @email: yajuve.25.dz@gmail.com
         */
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], ProfileFriendPage);
    return ProfileFriendPage;
}());

//# sourceMappingURL=profile-friend.js.map

/***/ })

});
//# sourceMappingURL=2.js.map