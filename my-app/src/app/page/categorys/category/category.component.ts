import { CategoryService } from './../../../services/category.service';
import { category } from './../../../model/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category!: category[]
  constructor(
    private CategoryService : CategoryService
  ) {
    this.CategoryService.listCategory().subscribe(data =>{
      this.category = data
    })
   }

  ngOnInit(): void {
  }

  onDelete(id: number){
    const action = window.confirm('Bạn chắc có muốn xóa danh mục này chứ ?')
    if(action) {
      this.CategoryService.deleteCategory(id).subscribe(data =>{
        this.category = this.category.filter(item => item.id !== id)
      })
    }
  }
}
