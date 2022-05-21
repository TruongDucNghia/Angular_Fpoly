import { ProductDetailComponent } from './page/product-detail/product-detail.component';
import { ProductAddComponent } from './page/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  {path: 'homepage', component: HomepageComponent},
  {path: 'product/:id/detail', component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
