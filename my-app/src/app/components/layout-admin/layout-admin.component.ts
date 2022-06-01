import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.css']
})
export class LayoutAdminComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLogout(){
    const action = window.confirm('Ban chac co muon dang xuat ?')
    if(action){
      localStorage.removeItem('user')
      this.router.navigateByUrl('/')
    }
  }
}
