import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cart: Product[] = [];
  name: string = '';
  email: string = '';
  mobile: string = '';
  address: string = '';

  constructor(public cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    // Load cart safely from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        this.cart = JSON.parse(savedCart) as Product[];
      } catch (e) {
        console.error('Error parsing cart from localStorage', e);
        this.cart = [];
      }
    }
  }

  confirmOrder(): void {
    if (!this.name || !this.email || !this.mobile || !this.address) {
      alert('Please fill all fields!');
      return;
    }

    const total = this.cartService.getTotal();

    const order = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      address: this.address,
      total,
      items: this.cart
    };

    try {
      localStorage.setItem('lastOrder', JSON.stringify(order));
    } catch (e) {
      console.error('Error saving order to localStorage', e);
    }

    alert('Order Confirmed...! Thankyou for shopping with Ecolastic.')

    this.cartService.clearCart();
    this.cart = [];
    this.router.navigate(['/dashboard']);
  }
}