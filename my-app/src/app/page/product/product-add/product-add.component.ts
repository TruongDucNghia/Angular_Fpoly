import { CategoryService } from './../../../services/category.service';
import { category } from './../../../model/category';
import { Iproduct } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  product: Iproduct = {
    name: "",
    price: 0,
    categoryId: 0,
    img: "",
    desc: ""
  }
  category!: category[]
  constructor(
    private ProductService: ProductService,
    private CategoryService: CategoryService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { 
    this.CategoryService.listCategory().subscribe(data =>{
      this.category = data
    })
  }

  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    if (this.id) {
      this.ProductService.getProductDetail(this.id).subscribe(data => this.product = data)
    }
  }
  onSubmit() {
    if (this.id) {
      this.ProductService.updateProduct(this.product).subscribe(data => 
        this.router.navigateByUrl('/products'))
    } else {
      const categoryId = Number(this.product.categoryId)
      this.ProductService.addProduct({...this.product, categoryId}).subscribe(data =>
        this.router.navigateByUrl('/products')
      )
      
    }

  }
  async onChangeGetImg(e: any) {
    const file = e.target.files[0]
    const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dbpw1enlu/image/upload"
    const formData = new FormData()

    formData.append('file', file);
    formData.append('upload_preset', "cyfbktyp");
    const response = await axios.post(CLOUDINARY_API, formData, {
      headers: {
        "Content-Type": "application/form-data"
      }
    })
    this.product.img = response.data.url
  }

}
