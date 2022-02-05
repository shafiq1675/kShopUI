import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductSetupService } from '../product-setup.service';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.component.html',
  styleUrls: ['./product-setup.component.css']
})
export class ProductSetupComponent implements OnInit {

  productForm!: FormGroup;
  constructor(public fb: FormBuilder, private productService: ProductSetupService) { }

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.productForm = this.fb.group({
      productId: [''],
      productName: [''],
      productType: [''],
      productPrice: [''],
      Description: [''],

    });
    
  }

  submitForm() {
    console.log(this.productForm.value);
    this.productService.saveProduct(this.productForm.value);
  }
}
