import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerSetupComponent } from './Customer/customer-setup/customer-setup.component';
import { ProductSetupComponent } from './Product/product-setup/product-setup.component';
import { ProductOrderComponent } from './Order/product-order/product-order.component';
// import { MatInput, MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
import { FormsModule} from '@angular/forms';
// import {MatTableModule} from '@angular/material/table';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import {MatSelectModule} from '@angular/material/select';
import {MaterialExampleModule} from '../material.module';

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
    BrowserAnimationsModule,
    FormsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
