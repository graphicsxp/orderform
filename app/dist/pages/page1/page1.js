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
var Page1 = (function () {
    function Page1(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Page1 = __decorate([
        core_1.Component({
            template: "<ion-header>   <ion-navbar>     <button menuToggle>       <ion-icon name=\"menu\"></ion-icon>     </button>     <ion-title>Page Uno</ion-title>   </ion-navbar> </ion-header>   <ion-content padding class=\"page1\">    <h3>Ionic Menu Starter</h3>    <p>     If you get lost, the <a href=\"http://ionicframework.com/docs/v2\">docs</a> will show you the way.   </p>    <button secondary menuToggle>Toggle Menu</button>  </ion-content>"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], Page1);
    return Page1;
}());
exports.Page1 = Page1;
