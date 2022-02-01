import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerSetupComponent } from './Customer/customer-setup/customer-setup.component';
import { ProductSetupComponent } from './Product/product-setup/product-setup.component';
import { ProductOrderComponent } from './Order/product-order/product-order.component';
import { MatInput, MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    CustomerSetupComponent,
    ProductSetupComponent,
    ProductOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
