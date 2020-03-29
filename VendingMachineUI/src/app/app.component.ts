import { CartService } from './shared/cart.service';
import { SaleItems } from './modal/saleItem.info';

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  public loading = new BehaviorSubject<boolean>(false);
  public loadSpinner = this.loading.asObservable();
  shoppingCartItems: Observable<SaleItems[]>;
 constructor(
   private cartService: CartService
 ) {
   this.loading.next(false);
 }
 ngOnInit() {
this.shoppingCartItems = this.cartService.getItemOnCart();

this.shoppingCartItems.subscribe();
 }

}
