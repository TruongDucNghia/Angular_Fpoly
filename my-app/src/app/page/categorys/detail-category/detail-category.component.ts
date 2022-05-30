import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './../../../services/category.service';
import { category } from './../../../model/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  category!: category
  constructor(
    private CategoryService: CategoryService,
    private ActivatedRoute: ActivatedRoute
  ) { 
    this.CategoryService.detailCategory(Number(this.id)).subscribe(data =>{
      this.category = data
    })
  }
  id = this.ActivatedRoute.snapshot.paramMap.get('id')

  ngOnInit(): void {
  }


}
