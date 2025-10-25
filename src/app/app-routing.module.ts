import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },       // Landing page
  { path: 'shop', component: ProductsComponent },    // Products page
  { path: 'checkout', component: CheckoutComponent },// Checkout page
  { path: 'cart', component: CartComponent },        // cart page
  { path: '**', redirectTo: '' }                     // Fallback to Dashboard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }