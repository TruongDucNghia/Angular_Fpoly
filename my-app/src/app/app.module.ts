import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/homepage/homepage.component';
import { ProductsComponent } from './page/product/products/products.component';
import { ProductDetailComponent } from './page/product/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product/product-add/product-add.component';
import {HttpClientModule} from '@angular/common/http';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CategoryComponent } from './page/categorys/category/category.component';
import { AddCategoryComponent } from './page/categorys/add-category/add-category.component';
import { DetailCategoryComponent } from './page/categorys/detail-category/detail-category.component';
registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent,
    NotFoundComponent,
    CategoryComponent,
    AddCategoryComponent,
    DetailCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzLayoutModule,
    NzTableModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzMenuModule

  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
