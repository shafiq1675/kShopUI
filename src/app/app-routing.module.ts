import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerSetupComponent} from './Customer/customer-setup/customer-setup.component'
import { HomeComponent } from './home/home.component';
import { ProductSetupComponent } from './Product/product-setup/product-setup.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'customer-setup', component: CustomerSetupComponent },
  { path: 'product-setup', component: ProductSetupComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
