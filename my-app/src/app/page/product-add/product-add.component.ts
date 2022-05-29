import { Iproduct } from './../../model/product';
import { ProductService } from './../../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  @Output() createProduct = new EventEmitter<{ name: string, price: number }>()
  product: Iproduct = {
    name: "",
    price: 0,
    img: "",
    desc: ""
  }
  constructor(
    private ProductService: ProductService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
    if (this.id) {
      this.ProductService.getProductDetail(this.id).subscribe(data => this.product = data)
    }
  }
  onSubmit() {
    if (this.id) {
      this.ProductService.updateProduct(this.product).subscribe(data => this.router.navigateByUrl('/products'))
    } else {
      this.ProductService.addProduct(this.product).subscribe(data =>
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
    console.log(response.data.url);
    this.product.img = response.data.url
  }

}
