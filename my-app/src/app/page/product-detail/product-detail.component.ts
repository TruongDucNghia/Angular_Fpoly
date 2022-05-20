import { Iproduct } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() pro!:Iproduct
  constructor() { }

  ngOnInit(): void {
  }

}
