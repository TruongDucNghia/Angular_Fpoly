import { Iproduct } from './model/product';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';
  isCollapsed = false;
  handleAddProducts(product : any){
  //   console.log(product);
  //   const id = Math.floor(Math.random() * 10000)
  //  this.listProducts = [...this.listProducts, {...product, id}] 
  // console.log(id);
  
  }
  
}
