import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Productcls } from '../Models/productcls';


@Injectable({
  providedIn: 'root'
})
export class ProductSetupService {

  constructor(private http : HttpClient) { }

  saveProduct(product: Productcls) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    this.http.post<any>('https://localhost:44352/ProductSetup', JSON.stringify(product), httpOptions).subscribe(data => {
        return console.log(data);
    })

    console.log(product);
  }
}

