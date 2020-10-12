import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [CartComponent,
                 CheckoutComponent,
                 LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CustomerModule { }
