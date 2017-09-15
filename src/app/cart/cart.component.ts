import { Component, OnInit } from '@angular/core';
import {CartItem} from './cart-item';
import {Product} from '../product/product';
import {CartService} from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService)  { }
  isProductRemoved:boolean=false;
cartItems: CartItem[];

  ngOnInit() {
    this.cartItems=this.cartService.list();
  }

  removeFromCart(product:Product)
  {
if(confirm("Do you REALLY want to delete this product?"))
  {
    this.cartService.removeFromCart(product.productId);
    this.isProductRemoved=true;
  }
  }

}
