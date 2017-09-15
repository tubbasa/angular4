import { Component, OnInit,DoCheck } from '@angular/core';
import {CartService} from '../cart.service';
import {CartItem} from '../cart-item';
import {Product} from '../../product/product';
@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {
//DoCheck sayfada her hangi bir değişiklik olunca load event,nin yani ngoninitin yeniden çalışmasını sağlar!
  constructor(private cartService:CartService) { }
totalCartItem:number;
totalCartItemPrice:number;
isProductRemoved:boolean=false;
products:CartItem[];
  ngOnInit() {
    //burada component bir kere açıldığında yazar loadda yazar yani sadece bir ere bu yüzden ngdochecki impelemnte ett,ik ve kodlarımızı oraya taşıdık
    //this.totalCartItem=this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    //reduce b listedeki her eleman a total cart ıtema atayacağımız değer
    //this.totalCartItemPrice=this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.unitPrice,0);
    this.products=this.cartService.list();
  }
  removeFromCart(product:Product)
  {
if(confirm("Do you REALLY want to delete this product?"))
  {
    this.cartService.removeFromCart(product.productId);
    this.isProductRemoved=true;
  }
  }
  ngDoCheck(){
    this.totalCartItem=this.cartService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice=this.cartService.list().reduce((a,b)=>a+b.quantity*b.product.unitPrice,0);
  }

}
