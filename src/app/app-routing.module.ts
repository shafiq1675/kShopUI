import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerSetupComponent} from './Customer/customer-setup/customer-setup.component'

const routes: Routes = [
  { path: 'customer-setup', component: CustomerSetupComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
