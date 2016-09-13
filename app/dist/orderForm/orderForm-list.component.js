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
var orderForm_service_1 = require('./orderForm-service');
var OrderFormListComponent = (function () {
    function OrderFormListComponent(_orderFormService, navCtrl, modalCtrl) {
        this._orderFormService = _orderFormService;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.orderForms = [];
    }
    OrderFormListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._orderFormService.getOrderForms()
            .subscribe(function (orderForms) { return _this.orderForms = orderForms; }, function (error) { return _this.errorMessage = error; });
    };
    OrderFormListComponent.prototype.itemSelected = function (item) {
        // this.navCtrl.push(OrderFormDetailComponent, {myOrderForm: item})
        var modal = this.modalCtrl.create(orderForm_detail_component_1.OrderFormDetailComponent, item);
        modal.present();
    };
    OrderFormListComponent = __decorate([
        core_1.Component({
            template: "<ion-header>     <ion-navbar>         <button menuToggle>       <ion-icon name=\"menu\"></ion-icon>     </button>         <ion-title>Order Forms</ion-title>     </ion-navbar> </ion-header>  <div class='has-error' *ngIf='errorMessage'>{{errorMessage}}</div>  <ion-content padding class=\"page1\">      <ion-list>         <ion-item *ngFor=\"let orderForm of orderForms\" (click)=\"itemSelected(orderForm)\">          <ion-icon name=\"paper\"></ion-icon>   {{orderForm.frameworkContractNumber}} (request : {{orderForm.requestIdentifier}})         </ion-item>     </ion-list>  </ion-content>",
            providers: [orderForm_service_1.OrderFormService]
        }), 
        __metadata('design:paramtypes', [orderForm_service_1.OrderFormService, ionic_angular_1.NavController, ionic_angular_1.ModalController])
    ], OrderFormListComponent);
    return OrderFormListComponent;
}());
exports.OrderFormListComponent = OrderFormListComponent;
