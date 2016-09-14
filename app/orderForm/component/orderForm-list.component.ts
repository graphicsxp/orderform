import { Component, OnInit} from '@angular/core';
import { IOrderForm } from '../model/orderForm-model';
import { NavController, ModalController } from 'ionic-angular';
import { OrderFormDetailComponent } from './orderForm-detail.component';
import { OrderFormService } from '../service/orderForm-service';
import { LoadingService } from '../../shared/service/loading-service';
import * as  _ from 'lodash';


@Component({
    templateUrl: '../template/orderForm-list.component.html',
    providers: [OrderFormService, LoadingService]
})
export class OrderFormListComponent 
    implements OnInit {

    orderForms: IOrderForm[] = [];
    errorMessage: string;

    constructor(private _orderFormService: OrderFormService, 
                private _modalCtrl: ModalController) { }

    ngOnInit(): void {
        this._orderFormService.getOrderForms()
            .subscribe(
                orderForms => this.orderForms = orderForms,
                error => this.errorMessage = <any>error
            );
    }

    itemSelected(item: IOrderForm): void {        
        // this.navCtrl.push(OrderFormDetailComponent, {myOrderForm: item})
        let modal = this._modalCtrl.create(OrderFormDetailComponent, item);
        modal.present();
    }
}
