import { Router, ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { category } from 'src/app/model/category';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category: category = {
    name: "",
    img: ""
  }
  constructor(
    private CategoryService : CategoryService,
    private router : Router,
    private ActivatedRoute : ActivatedRoute 
  ) { 
    if(this.id){
      this.CategoryService.detailCategory(Number(this.id)).subscribe(data =>{
        this.category = data
      })
    }
  }
  id = this.ActivatedRoute.snapshot.paramMap.get('id')
  ngOnInit(): void {
  }
  onSubmit(){
    if(this.id){
      this.CategoryService.updateCategory(this.category).subscribe(data =>{
        this.router.navigateByUrl('/category')
      })
    }else{
      this.CategoryService.addCategory(this.category).subscribe(data =>{
        this.router.navigateByUrl('/category')
      })
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
    this.category.img = response.data.url
  }
}
