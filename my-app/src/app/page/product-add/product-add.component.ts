import { Iproduct } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{name: string, price: number}>()
  product: Iproduct = {
    name: "",
    price: 0,
    desc: ""
  }
  constructor(
    private ProductService : ProductService,
    private router : Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    if(this.id){
      this.ProductService.getProductDetail(this.id).subscribe(data => this.product = data)
    }
  }
  onSubmit(){
    if(this.id){
      this.ProductService.updateProduct(this.product).subscribe(data => this.router.navigateByUrl('/products'))
    }else{
      this.ProductService.addProduct(this.product).subscribe(data => 
          this.router.navigateByUrl('/products')
        )
    }
    
  }

}
