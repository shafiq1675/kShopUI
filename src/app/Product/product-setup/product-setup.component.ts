import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.component.html',
  styleUrls: ['./product-setup.component.css']
})
export class ProductSetupComponent implements OnInit {

  productForm!: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.productForm = this.fb.group({
      productId: [''],
      productName: [''],
      productType: [''],
      productDescription: [''],

    });
    
  }

  submitForm() {
    console.log(this.productForm.value);
  }
}
