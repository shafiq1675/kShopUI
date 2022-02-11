import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseE } from '../Models/response';

@Injectable({
  providedIn: 'root'
})
export class ProductOrderService {

  constructor(private http: HttpClient) { }

  saveProductOrder (order: any, customerId: number) : Observable<ResponseE> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    return this.http.post<ResponseE>('https://localhost:44352/ProductOrder?customerId='+ customerId, JSON.stringify(order), httpOptions);
      
  }

}
