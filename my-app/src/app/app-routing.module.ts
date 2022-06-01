import { LayoutClientComponent } from './components/layout-client/layout-client.component';
import { AuthGuard } from './components/auth.guard';
import { LayoutAdminComponent } from './components/layout-admin/layout-admin.component';
import { SignupComponent } from './page/users/signup/signup.component';
import { SigninComponent } from './page/users/signin/signin.component';
import { ListProductsComponent } from './page/product/list-products/list-products.component';
import { DetailCategoryComponent } from './page/categorys/detail-category/detail-category.component';
import { AddCategoryComponent } from './page/categorys/add-category/add-category.component';
import { CategoryComponent } from './page/categorys/category/category.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProductsComponent } from './page/product/products/products.component';
import { ProductDetailComponent } from './page/product/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  // {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'admin', component: LayoutAdminComponent, canActivate: [AuthGuard], children: [
    {path: 'homepage', component: HomepageComponent},
    {path: 'products', component: ProductsComponent, children:[
      {path: 'list', component: ListProductsComponent},
      {path: 'add', component: ProductAddComponent},
      {path: ':id/detail', component: ProductDetailComponent},
      {path: ':id/edit', component: ProductAddComponent},
    ]},
    {path: 'category', component: CategoryComponent},
    {path: 'category/add', component: AddCategoryComponent},
    {path: 'category/:id', component: DetailCategoryComponent},
    {path: 'category/:id/update', component: AddCategoryComponent},
  ]},
  {path: '', component: LayoutClientComponent, children: [
    {path: '', redirectTo:'signin', pathMatch:'full'},
    {path: 'signin', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
