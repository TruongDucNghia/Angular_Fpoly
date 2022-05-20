import { Iproduct } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  isProducts!: Iproduct;
  isString: string = "List products"
  isInput: string = ""
  @Input() data!: Iproduct[]

  constructor() { }

  ngOnInit(): void {
  }

  onHandleClick(id: number){
    const action = window.confirm('Ban chac muon xoa san pham !')
    if(action){
      this.data = this.data.filter(product => product.id !== id)
    }
  }

  onHandleDetail(product : Iproduct){
    this.isProducts = product
    
  }
}
