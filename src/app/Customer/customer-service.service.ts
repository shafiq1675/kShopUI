import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../Models/customer';
import { Customercls } from '../Models/customercls';
import { ResponseE } from '../Models/response';


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

  constructor(private http: HttpClient) { }

  apiCall(){
    return this.http.get<any>('http://localhost:100/api/Books');
  }

  saveCustomer (customer: Customercls) : Observable<ResponseE> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json; charset=utf-8'
        })
      };
    return this.http.post<ResponseE>('https://localhost:44352/Customer', JSON.stringify(customer), httpOptions);
    // .subscribe(data => {
    //   return  data;
    // }
    // )
  
  }

  // getAllCustomer() {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json; charset=utf-8'
  //       })
  //     };
  //   this.http.get<any>('https://localhost:44352/Customer').subscribe(data => {
  //       return data;
  //   })

    
  // }

  getAllCustomer() :Observable<ResponseE> {
    return this.http.get<ResponseE>('https://localhost:44352/Customer'); // no need for '.map((res: Response) => res.json())' 
   }
  
}
