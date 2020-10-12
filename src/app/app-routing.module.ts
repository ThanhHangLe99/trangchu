import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './customer/cart/cart.component';
import { CheckoutComponent } from './customer/checkout/checkout.component';
import { LoginComponent } from './customer/login/login.component';
import { MainComponent } from './main/main.component';
import { ChitietComponent } from './product/chitiet/chitiet.component';
import { ListComponent } from './product/list/list.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [{ path: '', component: MainComponent },
{ path: 'main', component: MainComponent},
{ path: 'login', component: LoginComponent },
{ path: 'chitiet', component: ChitietComponent },
{ path: 'list', component: ListComponent },
{ path: 'cart', component: CartComponent },
{ path: 'checkout', component : CheckoutComponent },
{ path: '**', component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
