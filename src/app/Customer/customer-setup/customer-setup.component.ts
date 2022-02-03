import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customercls } from 'src/app/Models/customercls';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'app-customer-setup',
  templateUrl: './customer-setup.component.html',
  styleUrls: ['./customer-setup.component.css']
})
export class CustomerSetupComponent implements OnInit {
  private customer: Customercls = new Customercls();
  customerForm!: FormGroup;
  constructor(public fb: FormBuilder, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.customerForm = this.fb.group({
      customerName: [''],
      mobileNumber: [''],
      email: [''],
      address: [''],

    });
    
  }

  submitForm() {
    console.log(this.customerForm.value);
    this.customer = new Customercls(this.customerForm.value);
    this.customerService.saveCustomer(this.customerForm.value);
    console.log(this.customer);
  }

}
