import { Iproduct } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isString: string = "List products"
  isStatus: boolean = false

  listProducts: Iproduct[] = [
    {id: 1, name: 'Products A', price: 100},
    {id: 2, name: 'Products B', price: 200},
    {id: 3, name: 'Products C', price: 300}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.isStatus = !this.isStatus
  }

  onHandleClick(id: number){
    const action = window.confirm('Ban chac muon xoa san pham !')
    if(action){
      this.listProducts = this.listProducts.filter(product => product.id !== id)
    }
  }
}
