import { NavController, Platform } from 'ionic-angular';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { LoginService } from '../service/login-service';
import { OrderFormListComponent } from '../../orderForm/component/orderForm-list.component'

@Component({
    templateUrl: '../template/login.component.html',
    providers: [LoginService]
})
export class LoginComponent {
    username: string;
    password: string;

    constructor(private _loginService: LoginService, private _navController: NavController, private _platform: Platform, private http: Http) { }

    login() {
        this._loginService.login(this.username, this.password).subscribe(
             data => {      
               //Navigate to home page              
                this._navController.setRoot(OrderFormListComponent);
             }
          )
       }
}