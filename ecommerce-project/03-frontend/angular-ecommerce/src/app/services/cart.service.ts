import { Injectable } from '@angular/core';
import { Product } from '../common/product';
import { CartItem } from '../common/cart-item';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }

  addToCart(cartItem: CartItem) {

    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined!;

    if (this.cartItems.length > 0) {
      
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === cartItem.id)!;

      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      existingCartItem.quantity++;
    } else {
      this.cartItems.push(cartItem);
    }

    this.computeCartTotals();
  }

  computeCartTotals() {
    
    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for (let currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalQuantityValue: number) {
    console.log('Contents of the cart');
    for (let tempCartItem of this.cartItems) {
      const subTotalprice = tempCartItem.quantity * tempCartItem.unitPrice;
      const subTotaluQuantity = tempCartItem.quantity;
      console.log(`Name: ${tempCartItem.name}; Quantity: ${tempCartItem.quantity}; Sub Total Price: ${subTotalprice}; Unit Price: ${tempCartItem.unitPrice}`)
    }
    console.log(`Sub Total Price: ${totalPriceValue.toFixed(2)}; Total Quantity: ${totalQuantityValue.toFixed(2)}`)
    console.log('----------------------------------------------------')
  }

  decrementQuantity(cartItem: CartItem) {
    cartItem.quantity--;

    if (cartItem.quantity === 0) {
      this.removeFromCart(cartItem);
    } else {
      this.computeCartTotals();
    }
  }

  removeFromCart(cartItem: CartItem) {
    const itemIndex = this.cartItems.findIndex(
      tempCartItem => tempCartItem.id == cartItem.id
    );

    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);
      this.computeCartTotals();
    }
  }
}
