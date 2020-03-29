import { map } from 'rxjs/operator';
import { SaleItems } from './../modal/saleItem.info';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable(
    {providedIn: 'root'}
)
/* Returns items in the cart */
export class CartService {
    private itemsInCartSubject: BehaviorSubject<SaleItems[]> = new BehaviorSubject([]);
    private itemsInCart: SaleItems[] = [];
constructor() {
    this.itemsInCartSubject.subscribe(data => this.itemsInCart = data);
}
    getItemOnCart(): Observable<SaleItems[]> {
        return this.itemsInCartSubject;
       }
    getTotalAmount(): Observable<number>{
     return this.itemsInCartSubject.map((items: SaleItems[]) => {
         return items.reduce((prev, curr: SalesItems)) => {
             return prev + curr.price;
         }, 0);
     })
    }
}