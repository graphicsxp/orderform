import { IOrderForm } from './orderForms';
import { Component, OnInit } from  '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { OrderFormService } from './orderForm-service';

@Component({
    templateUrl: './orderForm-detail.component.html',
    providers: [OrderFormService]
})
export class OrderFormDetailComponent implements OnInit {
    myOrderForm: IOrderForm;
    errorMessage: string;

    constructor(public nav: NavController, public navParams: NavParams, public viewCtrl: ViewController, private _orderFormService: OrderFormService) {

    }

    ngOnInit(): void {
        this._orderFormService.getOrderForm(+this.navParams.get('id')).subscribe(
            orderForm => this.myOrderForm = orderForm,
            error => this.errorMessage = <any>error
        );
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}