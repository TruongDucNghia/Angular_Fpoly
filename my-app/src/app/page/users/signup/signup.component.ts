import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { user } from './../../../model/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: user = {
    username: "",
    email: "",
    password: ""
  }
  constructor(
    private AuthService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  onLogin(){
    this.AuthService.signup(this.user).subscribe(data =>{
      console.log(data);
      alert('Dang ky tai khoan thanh cong !')
      this.router.navigateByUrl('/signin')
    })
    
  }

}
