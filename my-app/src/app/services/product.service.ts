import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from '../data';
import { Iproduct } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  base_url : String = 'http://localhost:3000/products'
  getProduct(id : any){
    return data.find(item => item.id == id)
  }
  getProductList(): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(`${this.base_url}`)
  }
  getProductDetail(id: any): Observable<Iproduct>{
    return this.http.get<Iproduct>(`${this.base_url}/${id}`)
  }
  deleteProduct(id: any){
    return this.http.delete(`${this.base_url}/${id}`)
  }
  addProduct(data: Iproduct): Observable<Iproduct>{
    return this.http.post<Iproduct>(`${this.base_url}`, data)
  }
  updateProduct(data: Iproduct): Observable<Iproduct>{
    return this.http.put<Iproduct>(`${this.base_url}/${data.id}`, data)
  }
}
