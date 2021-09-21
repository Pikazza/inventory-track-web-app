import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from  '../models/customer.model';
import { Product } from  '../models/product.model';

const baseUrl = 'http://localhost:8080/customers';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class InventoryApiService {

  constructor(private http: HttpClient) { }

  login(UserName: string, Password: string): Observable<Customer> {
    console.log(UserName, Password);
    return this.http.post(baseUrl + '/signIn', {
      UserName,
      Password
    }, httpOptions);
  }

  getCustomerAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(baseUrl);
  }

  getCustomerId(customerId: any): Observable<Customer> {
    return this.http.get(`${baseUrl}/${customerId}`);
  }

  createCustomer(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  updateCustomer(customerId: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${customerId}`, data);
  }

  findByTitle(title: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${baseUrl}?title=${title}`);
  }

  getProductByCustomerId(customerId: any): Observable<Product[]> {
    return this.http.get<Customer[]>(`${baseUrl}/${customerId}/products`);
  }

}
