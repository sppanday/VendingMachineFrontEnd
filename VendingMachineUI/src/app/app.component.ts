import { SharedService } from './shared/shared.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SaleItems } from './modal/saleItem.info';
import { CartService } from './shared/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  shoppingCartItems: Observable<SaleItems[]>;
  cartProductList = [];
 constructor(
   private cartService: CartService
 ) {
 }
 ngOnInit() {
this.shoppingCartItems = this.cartService.getItemOnCart();

 }

 addProductToCart(product) {
   const productExistInCart = this.cartProductList.find(({name}) => name === product.itemId);
   if (!productExistInCart) {
     this.cartProductList.push({...product, num: 1});
     return;
   }
   productExistInCart.num += 1;
 }
 removeProduct(product) {
  this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name);
 }

}
