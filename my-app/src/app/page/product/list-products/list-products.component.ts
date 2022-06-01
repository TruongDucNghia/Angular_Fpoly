import { Iproduct } from './../../../model/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  isProducts!: Iproduct;
  isString: string = "List products"
  data!: Iproduct[]
  constructor(
    private productService: ProductService
  ) { 
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
