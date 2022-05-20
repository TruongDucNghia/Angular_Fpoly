import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{name: string, price: number}>()
  product: {name: string, price: number} = {
    name: "",
    price: 0
  }
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.createProduct.emit(this.product)
  }

}
