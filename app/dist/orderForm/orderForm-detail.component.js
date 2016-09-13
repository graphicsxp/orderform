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
var orderForm_service_1 = require('./orderForm-service');
var OrderFormDetailComponent = (function () {
    function OrderFormDetailComponent(nav, navParams, viewCtrl, _orderFormService) {
        this.nav = nav;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._orderFormService = _orderFormService;
    }
    OrderFormDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderFormService.getOrderForm(+this.navParams.get('id')).subscribe(function (orderForm) { return _this.myOrderForm = orderForm; }, function (error) { return _this.errorMessage = error; });
    };
    OrderFormDetailComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OrderFormDetailComponent = __decorate([
        core_1.Component({
            template: "<ion-header>     <ion-toolbar>         <ion-title>             Description         </ion-title>         <ion-buttons start>             <button (click)=\"dismiss()\">         <span primary showWhen=\"ios\">Cancel</span>         <ion-icon name=\"md-close\" showWhen=\"android,windows\"></ion-icon>       </button>         </ion-buttons>     </ion-toolbar> </ion-header>  <ion-content>      <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>      <ion-list>         <ion-item *ngIf=\"myOrderForm\">             <h2>{{myOrderForm.frameworkContractNumber}}</h2>             <p>{{myOrderForm.requestIdentifier}}</p>         </ion-item>          <!--<ion-item *ngFor=\"let item of character['items']\">         {{item.title}}         <ion-note item-right>           {{item.note}}         </ion-note>       </ion-item>-->     </ion-list> </ion-content>",
            providers: [orderForm_service_1.OrderFormService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_1.NavParams, ionic_angular_1.ViewController, orderForm_service_1.OrderFormService])
    ], OrderFormDetailComponent);
    return OrderFormDetailComponent;
}());
exports.OrderFormDetailComponent = OrderFormDetailComponent;
