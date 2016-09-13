import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from  'rxjs/Observable'
import { IOrderForm } from './orderforms'

@Injectable()
export class OrderFormService {
    private _orderFormUrl = './build/app/api/orderforms/orderforms.json';
    constructor(private _http: Http) { } 

    getOrderForms(): Observable<IOrderForm[]> {
        return this._http.get(this._orderFormUrl) 
            .map((response: Response) => <IOrderForm[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOrderForm(id: number): Observable<IOrderForm>{
        return this.getOrderForms()
            .map((orderForms: IOrderForm[]) => orderForms.find(p => p.id === id));
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Service error');
    }
}