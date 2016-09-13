import { Component, OnInit} from '@angular/core'
import { IOrderForm } from './orderForms'
import { NavController, ModalController } from 'ionic-angular'
import { OrderFormDetailComponent } from './orderForm-detail.component'
import { OrderFormService } from './orderForm-service'


@Component({
    templateUrl: '/orderForm-list.component.html',
    providers: [OrderFormService]
})
export class OrderFormListComponent
    implements OnInit {

    orderForms: IOrderForm[] = [];
    errorMessage: string;

    constructor(private _orderFormService: OrderFormService, public navCtrl: NavController, public modalCtrl: ModalController) { }

    ngOnInit(): void {
        this._orderFormService.getOrderForms()
            .subscribe(
                orderForms => this.orderForms = orderForms,
                error => this.errorMessage = <any>error
            );
    }

    itemSelected(item: IOrderForm): void {
        // this.navCtrl.push(OrderFormDetailComponent, {myOrderForm: item})
        let modal = this.modalCtrl.create(OrderFormDetailComponent, item);
        modal.present();
    }
}
