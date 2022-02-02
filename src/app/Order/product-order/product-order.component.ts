import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable,ReplaySubject  } from 'rxjs';
import { Customer } from 'src/app/Models/customer';
import {DataSource} from '@angular/cdk/collections';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-product-order',
  templateUrl: './product-order.component.html',
  styleUrls: ['./product-order.component.css']
})

export class ProductOrderComponent implements OnInit {
  price!: number;
  
  options: Customer[] = [
    {id:'001', name: 'khan'},
    {id:'002', name: 'khan2'},
  ];

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);


  customerForm!: FormGroup;
  constructor(public fb: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm();    
    this.price = 100;
  }

  reactiveForm() {
    this.customerForm = this.fb.group({
      customerId: [''],
      productId: [''],
      productQuantity: ['']

    });
    
  }

  submitForm() {
    console.log(this.customerForm.value);
  };

  addToCart(){
    console.log(this.customerForm.value); 
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    const cname = this.customerForm.value.customerId;
    if(this.userExists(cname)){

    }
    else{
      this.dataToDisplay = [...this.dataToDisplay, {position: 100, name: this.customerForm.value.customerId, weight: 200.2, symbol: 'K'}];
      this.dataSource.setData(this.dataToDisplay);
    }
  }

  userExists(name: any) {
    return this.dataToDisplay.some(function(el) {
      return el.name === name;
    }); 
  }


}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }
}
