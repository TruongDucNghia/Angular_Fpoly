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
  getProduct(id : any){
    return data.find(item => item.id == id)
  }
  getProductList(): Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>('http://localhost:3000/products')
  }
  getProductDetail(id: any): Observable<Iproduct>{
    return this.http.get<Iproduct>(`http://localhost:3000/products/${id}`)
  }
  deleteProduct(id: any){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
}
