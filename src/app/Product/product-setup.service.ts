import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productcls } from '../Models/productcls';
import { ResponseE } from '../Models/response';


@Injectable({
  providedIn: 'root'
})
export class ProductSetupService {

  constructor(private http : HttpClient) { }

  saveProduct(product: Productcls) : Observable<ResponseE> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    return this.http.post<any>('https://localhost:44352/ProductSetup', JSON.stringify(product), httpOptions);
  }

  getAllProduct(): Observable<ResponseE>{
    return this.http.get<ResponseE>("https://localhost:44352/ProductSetup");
  }

  getProduct(id: string): Observable<ResponseE>{
    return this.http.get<ResponseE>("https://localhost:44352/ProductSetup/"+id);
  }
}

