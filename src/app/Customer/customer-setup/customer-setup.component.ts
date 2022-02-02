import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-customer-setup',
  templateUrl: './customer-setup.component.html',
  styleUrls: ['./customer-setup.component.css']
})
export class CustomerSetupComponent implements OnInit {
  customerForm!: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.customerForm = this.fb.group({
      name: [''],
      mobileNumber: [''],
      email: [''],
      address: [''],

    });
    
  }

  submitForm() {
    console.log(this.customerForm.value);
  }

}
