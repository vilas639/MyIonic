import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddoffersService } from '../addoffers/addoffers.service';

 
export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  data: Product[] = [
    { id: 0, name: 'Europe', price: 92900, amount: 0 },
    { id: 1, name: 'Bhutan', price: 42000, amount: 0 },
    { id: 2, name: 'Bali', price: 34000, amount: 0 },
    { id: 3, name: 'Kerala', price: 23000, amount: 0 },
    { id: 4, name: 'Mumbai', price: 10000, amount: 0 }
  ];
  
  productList: any;
 

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor(private addoff: AddoffersService) { }

  getProducts() {

     this.addoff.getProductList().subscribe(
      res => {
        console.log("cart service"+JSON.stringify(res));
        this.productList = res;
        console.log("cart service1"+this.productList );


        this.data.length = 0;
        
        for(let i=0; i < this.productList.length ; i++){ // n is array.length

          
          console.log("cart service1 push"+this.productList[i].title );
          this.data.push({ id: this.productList[i].id, name: this.productList[i].title, price: this.productList[i].price, amount: 0 });
       }
      }
    );
    
    return this.data;
    
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }


  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
