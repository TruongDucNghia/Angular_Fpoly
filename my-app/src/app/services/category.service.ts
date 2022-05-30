import { category } from './../model/category';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http : HttpClient
  ) { }
  base_url : String = 'http://localhost:3000/categorys'

  addCategory(data: category): Observable<category>{
    return this.http.post<category>(`${this.base_url}`, data)
  }

  listCategory(): Observable<category[]>{
    return this.http.get<category[]>(`${this.base_url}`)
  }

  updateCategory(data: category): Observable<category>{
    return this.http.put<category>(`${this.base_url}/${data.id}`, data)
  }

  detailCategory(id: number): Observable<category>{
    return this.http.get<category>(`${this.base_url}/${id}`)
  }

  deleteCategory(id: number): Observable<category>{
    return this.http.delete<category>(`${this.base_url}/${id}`)
  }
}
