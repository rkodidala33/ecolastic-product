import { Component } from '@angular/core';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  get cart() {
    return this.cartService.getCart();
  }

  get total() {
    return this.cartService.getTotal();
  }

  get cartCount() {
    return this.cartService.getCartCount();
  }

  removeItem(index: number) {
    this.cartService.removeFromCart(index);
  }
}