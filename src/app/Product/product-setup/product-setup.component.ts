import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/Models/product';
import { Productcls } from 'src/app/Models/productcls';
import { ResponseE } from 'src/app/Models/response';
import { ProductSetupService } from '../product-setup.service';

@Component({
  selector: 'app-product-setup',
  templateUrl: './product-setup.component.html',
  styleUrls: ['./product-setup.component.css']
})
export class ProductSetupComponent implements OnInit {
  displayedColumns: string[] = ['productId',  'productName', 'productType', 'productPrice', 'description','actions' ];
  productArray : Product [] = [];
  tableDataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;
  public response: ResponseE | undefined;
  public product: Productcls = new Productcls();
  public products: Productcls[] = [] ;
  productForm!: FormGroup;
  constructor(public fb: FormBuilder, private productService: ProductSetupService) { }

  ngOnInit(): void {
    this.tableDataSource.paginator = this.paginator;
    this.reactiveForm();
    this.getAllProduct();
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
    this.productService.saveProduct(this.productForm.value).subscribe(data=>{
    this.response = data;
    if(this.response.status==200)
    {
      this.getAllProduct();
    }
    alert(this.response.message);
    });
    
  }

  getAllProduct(){
    this.productService.getAllProduct().subscribe(data=> {
      this.response = data;
      this.productArray = [];
      for(let i = 0 ; i< this.response.data.length; i++){
        this.productArray.push(this.response.data[i])
      }
      this.tableDataSource.data = this.productArray;
      console.log(this.productArray);
    });
  }

  setProduct(id: string){
    alert(id);
    this.productService.getProduct(id).subscribe(data => 
      {
        // console.log(data);
        this.response = data;
        // console.log(this.response.data);
        // console.log(this.response.message);
        // console.log(this.response.status);
        // console.log(this.response.responseTime);
        console.log(this.response.data);

        this.product = this.response.data;

        

      }
      
    );
  }
}
