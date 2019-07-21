import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunshopperComponent } from './funshopper/funshopper.component';
import { ProductsComponent } from './funshopper/products/products.component';
import { OrdersComponent } from './funshopper/orders/orders.component';
import { ShoppingCartComponent } from './funshopper/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FunshopperComponent,
    ProductsComponent,
    OrdersComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
