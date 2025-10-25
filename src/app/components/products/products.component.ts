import { Component } from '@angular/core';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: Product[] = [
    { id: 1, name: 'Compostable Garbage Bag', price: 120, image: 'assets/images/Garbage-bag.jpeg' },
    { id: 2, name: 'U-Cut Carry Bag', price: 90, image: 'assets/images/U-Bag.jpeg' },
    { id: 3, name: 'Compostable Pouch', price: 60, image: 'assets/images/Eco-Pouch.jpeg' }
  ];

  constructor(public cartService: CartService) {}

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }
}