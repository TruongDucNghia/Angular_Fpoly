import { ProductService } from './../../services/product.service';
import { Iproduct } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input() pro!:Iproduct
  pro!: Iproduct
  constructor(
    private router: ActivatedRoute,
    private ProductService: ProductService
  ) {
    this.router.paramMap.subscribe(param =>{
      const id = param.get('id')
      this.ProductService.getProductDetail(id).subscribe(data =>{
        this.pro = data
      })
      
    })
    
  }

  ngOnInit(): void {
  }
  handleClick(){
    
  }

}
