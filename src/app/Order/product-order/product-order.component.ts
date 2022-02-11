import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable,ReplaySubject  } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import {DataSource} from '@angular/cdk/collections';
import { Customercls } from 'src/app/Models/customercls';
import { CustomerServiceService } from 'src/app/Customer/customer-service.service';
import { ProductSetupService } from 'src/app/Product/product-setup.service';
import { ResponseE } from 'src/app/Models/response';
import { Productcls } from 'src/app/Models/productcls';
import { Product } from 'src/app/Models/product';
import { ProductOrderDetails } from 'src/app/Models/product-order-details';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
let ELEMENT_DATA: ProductOrderDetails[] = [];

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})

export class ProductOrderComponent implements OnInit {
  price: number = 0;
  qty: number = 0;
  subTotal: number =0;
  public customers: Customercls[] = [] ;
  public response: ResponseE | undefined;
  public product: Productcls = new Productcls();

  
  optionsCustomer: any[] = [];
  optionsProduct: any[] = [];

  displayedColumns: string[] = ['productId', 'productName', 'productPrice', 'productQuantity' , 'subTotal'];
  productArray : ProductOrderDetails [] = [];
  tableDataSource = new MatTableDataSource<ProductOrderDetails>([]);
  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;


  customerForm!: FormGroup;
  constructor(public fb: FormBuilder, private customerService: CustomerServiceService, private productService: ProductSetupService) { }

  ngOnInit(): void {
    this.tableDataSource.paginator = this.paginator;
    this.reactiveForm();    
    this.price = 0;
    this.setCustomerDropdown();
    this.setProductDropdown();

  }

  reactiveForm() {
    this.customerForm = this.fb.group({
      customerId: [''],
      productId: [''],
      productQuantity: [1,]

    });
    
  }

  submitForm() {
    console.log(this.customerForm.value);
  };

  addToCart(){
    console.log(this.customerForm.value); 
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    const productId = this.customerForm.value.productId;
    alert(productId);
    if(this.isExistsInTheCart(productId)){
      alert("Product already exist in the cart.");
    }
    else{
      let ordDetails= {
        productId: this.customerForm.value.productId,
        productName: this.customerForm.value.productId,
        productPrice: this.price,
        productQuantity: this.qty,
        subTotal : this.subTotal,

      };
      this.productArray.push(ordDetails);
      this.tableDataSource.data = this.productArray;
      // this.dataToDisplay = [...this.dataToDisplay, {productId: '1', productName: 'Hydrogen', productPrice: 1.0079, productQuantity: 1, subTotal: 100}];
      // this.dataSource.setData(this.dataToDisplay);
    }
  }

  isExistsInTheCart(productId: any) {
    return this.productArray.some(function(el) {
      return el.productId === productId;
    }); 
  }

  changeCustomer(id: number): void
  {
    this.productArray = [];
    this.tableDataSource.data = this.productArray;
    this.price = 0;
    this.qty = 0;
    this.subTotal= 0;

  }

  changeProduct(id: string): void
  {
    
    this.productService.getProduct(id).subscribe(res=>{
      this.response=res;
      this.product = this.response.data;
      this.price=this.product.productPrice == undefined?0:this.product.productPrice;
      this.qty = this.customerForm.value.productQuantity;
      this.subTotal = this.price*this.qty;
    })
  }

  setCustomerDropdown(): void{
    this.customerService.getAllCustomer().subscribe(data=>{
      this.response = data;
      this.optionsCustomer = this.response.data;
    });
  }

  setProductDropdown(): void{
    this.productService.getAllProduct().subscribe(data=>{
      this.response = data;
      this.optionsProduct = this.response.data;
    });
  }

  qtyChange(qty : string): void{
    
    this.productService.getProduct(this.customerForm.value.productId).subscribe(res=>{
      this.response=res;
      this.product = this.response.data;
      this.price=this.product.productPrice == undefined?0:this.product.productPrice;
      this.qty = this.customerForm.value.productQuantity;
      this.subTotal = this.price*this.qty;
    })

  }

  saveOrder(): void
  {
    let orDetails = {
      customerId: this.customerForm.value.customerId,
      orderDetails : this.productArray
    }
    console.log(orDetails);
    alert("Order Saved succes.");
  }


}

