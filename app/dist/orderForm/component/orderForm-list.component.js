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
var orderForm_detail_component_1 = require('./orderForm-detail.component');
var orderForm_service_1 = require('../service/orderForm-service');
var loading_service_1 = require('../../shared/service/loading-service');
var OrderFormListComponent = (function () {
    function OrderFormListComponent(_orderFormService, _modalCtrl) {
        this._orderFormService = _orderFormService;
        this._modalCtrl = _modalCtrl;
        this.orderForms = [];
    }
    OrderFormListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderFormService.getOrderForms()
            .subscribe(function (orderForms) { return _this.orderForms = orderForms; }, function (error) { return _this.errorMessage = error; });
    };
    OrderFormListComponent.prototype.itemSelected = function (item) {
        // this.navCtrl.push(OrderFormDetailComponent, {myOrderForm: item})
        var modal = this._modalCtrl.create(orderForm_detail_component_1.OrderFormDetailComponent, item);
        modal.present();
    };
    OrderFormListComponent = __decorate([
        core_1.Component({
            template: "<ion-header>     <ion-navbar>         <button menuToggle>       <ion-icon name=\"menu\"></ion-icon>     </button>         <ion-title>Order Forms</ion-title>     </ion-navbar> </ion-header>  <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>  <ion-content padding class=\"grid-basic-page\">      <ion-card *ngIf='orderForms'>         <ion-card-header>             {{orderForms.length }} order forms were found.         </ion-card-header>          <ion-list>             <ion-item *ngFor=\"let orderForm of orderForms\" (click)=\"itemSelected(orderForm)\" class=\"item item-icon-right\">                 <ion-row>                     <ion-col width-30>                         <p>{{orderForm.signatureDate | date:'d/M/yyyy'}}</p>                         <p>{{orderForm.signatureDate | date:'shortTime'}}</p>                     </ion-col>                     <ion-col width-30 center>                         <h3>{{orderForm.frameworkContractNumber}}</h3>                         <p> (request : {{orderForm.requestIdentifier}}) </p>                     </ion-col>                     <ion-col>                     </ion-col>                     <ion-col>                         <ion-icon name=\"paper\"></ion-icon>                     </ion-col>                 </ion-row>                 <i class=\"icon ion-chevron-right icon-accessory\"></i>             </ion-item>         </ion-list>     </ion-card> </ion-content>",
            providers: [orderForm_service_1.OrderFormService, loading_service_1.LoadingService]
        }), 
        __metadata('design:paramtypes', [orderForm_service_1.OrderFormService, ionic_angular_1.ModalController])
    ], OrderFormListComponent);
    return OrderFormListComponent;
}());
exports.OrderFormListComponent = OrderFormListComponent;
