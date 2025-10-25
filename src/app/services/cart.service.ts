import { Injectable } from '@angular/core';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cart: Product[] = [];

  constructor() {
    const saved = localStorage.getItem('cart');
    this.cart = saved ? JSON.parse(saved) : [];
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: Product) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  clearCart() {
    this.cart = [];
    localStorage.removeItem('cart');
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  /** 🆕 Returns number of items in cart */
  getCartCount(): number {
    return this.cart.length;
  }
}