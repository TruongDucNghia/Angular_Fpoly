import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  constructor() {
    
  }

  ngOnInit(): void {
  }

}
