import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { Customercls } from '../Models/customercls';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  apiCall(){
    return this.http.get<any>('http://localhost:100/api/Books');
  }

  saveCustomer(customer: Customercls) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    this.http.post<any>('https://localhost:44352/Customer', JSON.stringify(customer), httpOptions).subscribe(data => {
        return console.log(data);
    })
  }

  getAllCustomer() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    this.http.get<any>('https://localhost:44352/Customer').subscribe(data => {
        return console.log(data);
    })
  }
}
