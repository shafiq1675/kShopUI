import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Customer } from 'src/app/Models/customer';
import { Customercls } from 'src/app/Models/customercls';
import { ResponseE } from 'src/app/Models/response';
import { CustomerServiceService } from '../customer-service.service';


@Component({
  selector: 'app-customer-setup',
  templateUrl: './customer-setup.component.html',
  styleUrls: ['./customer-setup.component.css']
})
export class CustomerSetupComponent implements OnInit {
  displayedColumns: string[] = ['customerId','customerName', 'mobileNumber', 'email', 'address', 'actions'];
  dataSource : Customer [] = [];
  dataSourceM = new MatTableDataSource<Customer>([]);
  @ViewChild(MatPaginator, { static: true })  paginator!: MatPaginator;
  public response: ResponseE | undefined;
  public customer: Customercls = new Customercls();
  public customers: Customercls[] = [] ;
  
  private listOfCustomer: Customercls [] = [];
  customerForm!: FormGroup;
  constructor(public fb: FormBuilder, private customerService: CustomerServiceService) { }

  ngOnInit(): void {
    this.dataSourceM.paginator = this.paginator;
    this.reactiveForm();
    this.getAllCustomer();
  }

  reactiveForm() {
    this.customerForm = this.fb.group({
      customerId: [''],
      customerName: [''],
      mobileNumber: [''],
      email: [''],
      address: [''],

    });
    
  }

  submitForm() {
    // console.log(this.customerForm.value);
    this.customer = new Customercls(this.customerForm.value);
    this.customerService.saveCustomer(this.customerForm.value).subscribe(res => 
      {
        this.response = res;
        console.log(res);
        if(this.response.status==200)
        {
          this.getAllCustomer();
        }
        alert(this.response.message);

      }
      );
    
  }

  getAllCustomer() {    
    // customerlist : Customercls[] = this.customerService.getAllCustomer();
    // this.customerService.getAllCustomer().pipe().subscribe((data) => 
    //   this.response = data
    //   );
    this.customerService.getAllCustomer().subscribe(data => 
      {
        // console.log(data);
        this.response = data;
        // console.log(this.response.data);
        // console.log(this.response.message);
        // console.log(this.response.status);
        // console.log(this.response.responseTime);
        // this.customer = this.response.data[0];
        this.customers = this.response.data;
        this.dataSource = [];
        for(let i =0; i<this.response.data.length; i++){
        this.dataSource.push(this.response.data[i]);
        }
        this.dataSourceM.data = this.dataSource;
        console.log(this.dataSource);
        console.log(this.dataSourceM.data);

      }
      
    );
    
  }

  

  setCustomer(id : number){
    alert(id);
    this.customerService.getCustomer(id).subscribe(data => 
      {
        // console.log(data);
        this.response = data;
        // console.log(this.response.data);
        // console.log(this.response.message);
        // console.log(this.response.status);
        // console.log(this.response.responseTime);
        console.log(this.response.data);

        this.customer = this.response.data;

        

      }
      
    );
  }

}
