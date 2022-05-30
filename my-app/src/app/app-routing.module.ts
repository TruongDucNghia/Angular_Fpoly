import { NotFoundComponent } from './page/not-found/not-found.component';
import { ProductsComponent } from './page/product/products/products.component';
import { ProductDetailComponent } from './page/product/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent, pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'product/:id/detail', component: ProductDetailComponent},
  {path: 'product/:id/edit', component: ProductAddComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
