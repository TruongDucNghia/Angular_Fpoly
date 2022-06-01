import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { user } from './../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user: {email: string, password: string} = {
    email: "",
    password: ""
  }
  constructor(
    private AuthService : AuthService,
    private router: Router
  ) {}

  onAdd(){
    this.AuthService.signin(this.user).subscribe(data =>{
      localStorage.setItem('user', JSON.stringify(data))
      alert(`Dang nhap thanh cong !`)
      this.router.navigateByUrl('/admin')
      
    })
    
  }
  ngOnInit(): void {
  }
  

}
