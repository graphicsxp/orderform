"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
require('rxjs/Rx'); // load all features of reactive extensions
var orderForm_list_component_1 = require('./orderForm/component/orderForm-list.component');
var page2_1 = require('./pages/page2/page2');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = orderForm_list_component_1.OrderFormListComponent;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Login', component: page2_1.Page2 },
            { title: 'Order Forms', component: orderForm_list_component_1.OrderFormListComponent }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            template: "<ion-menu [content]=\"content\">    <ion-toolbar>     <ion-title>Menu</ion-title>   </ion-toolbar>    <ion-content>     <ion-list>       <button menuClose ion-item *ngFor=\"let p of pages\" (click)=\"openPage(p)\">         {{p.title}}       </button>     </ion-list>   </ion-content>  </ion-menu>  <!-- Disable swipe-to-go-back because it's poor UX to combine STGB with side menus --> <ion-nav [root]=\"rootPage\" #content swipeBackEnabled=\"false\"></ion-nav>"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
ionic_angular_1.ionicBootstrap(MyApp);
