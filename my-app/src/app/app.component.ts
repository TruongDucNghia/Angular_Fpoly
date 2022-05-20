import { Iproduct } from './model/product';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  listProducts: Iproduct[] = [
    {id: 1, name: 'Products A', price: 100},
    {id: 2, name: 'Products B', price: 200},
    {id: 3, name: 'Products C', price: 300}
  ]
  handleAddProducts(product : any){
    console.log(product);
    const id = Math.floor(Math.random() * 10000)
   this.listProducts = [...this.listProducts, {...product, id}] 
  console.log(id);
  
  }
}
