import { ProductAddComponent } from './page/product-add/product-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'homepage', component: HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
