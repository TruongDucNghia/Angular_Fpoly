import { user } from './../model/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http : HttpClient
  ) { }
  base_url = "http://localhost:3000"
  signin(user: any){
    return this.http.post(`${this.base_url}/signin`, user)
  }
  signup(user: user){
    return this.http.post<user>(`${this.base_url}/register`, user)
  }
}
