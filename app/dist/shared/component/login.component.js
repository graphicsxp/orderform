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
var ionic_angular_1 = require('ionic-angular');
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
var login_service_1 = require('../service/login-service');
var orderForm_list_component_1 = require('../../orderForm/component/orderForm-list.component');
var LoginPage = (function () {
    function LoginPage(_loginService, _navController, _platform, http) {
        this._loginService = _loginService;
        this._navController = _navController;
        this._platform = _platform;
        this.http = http;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this._loginService.login(this.username, this.password).subscribe(function (data) {
            //Navigate to home page              
            _this._navController.setRoot(orderForm_list_component_1.OrderFormListComponent);
        });
    };
    LoginPage = __decorate([
        core_1.Component({
            template: "<ion-list>    <ion-item>     <ion-label floating>Username</ion-label>     <ion-input [(ngModel)]=\"username\" type=\"text\" value=\"\"></ion-input>   </ion-item>    <ion-item>     <ion-label floating>Password</ion-label>     <ion-input [(ngModel)]=\"password\"  type=\"password\" value=\"\"></ion-input>   </ion-item>  </ion-list>  <div padding>   <button primary block  (click)=\"login()\">Sign In</button> </div>",
            providers: [login_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService, ionic_angular_1.NavController, ionic_angular_1.Platform, http_1.Http])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
