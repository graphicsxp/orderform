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
var Page2 = (function () {
    function Page2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    Page2.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(Page2, {
            item: item
        });
    };
    Page2 = __decorate([
        core_1.Component({
            template: "<ion-header>   <ion-navbar>     <button menuToggle>       <ion-icon name=\"menu\"></ion-icon>     </button>     <ion-title>Page 2</ion-title>   </ion-navbar> </ion-header>  <ion-content>   <ion-list>     <button ion-item *ngFor=\"let item of items\" (click)=\"itemTapped($event, item)\">       <ion-icon [name]=\"item.icon\" item-left></ion-icon>       {{item.title}}       <div class=\"item-note\" item-right>         {{item.note}}       </div>     </button>   </ion-list>   <div *ngIf=\"selectedItem\" padding>     You navigated here from <b>{{selectedItem.title}}</b>   </div> </ion-content>"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams])
    ], Page2);
    return Page2;
}());
exports.Page2 = Page2;
