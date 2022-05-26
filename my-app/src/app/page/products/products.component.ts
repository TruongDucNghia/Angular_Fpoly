import { ProductService } from './../../services/product.service';
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
  data!: Iproduct[]
  constructor(private productService: ProductService) {
    this.productService.getProductList().subscribe(data => {
      console.log(data);
      this.data = data 
    });
  }

  ngOnInit(): void {
  }

  onHandleClick(id: number){
    const action = window.confirm('Ban chac muon xoa san pham !')
    if(action){
      this.productService.deleteProduct(id).subscribe(data =>{
        console.log(data);
        this.data = this.data.filter(item => item.id !== id)
      })
    }
  }
}
