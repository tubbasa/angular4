import { Component, OnInit } from '@angular/core';
import {ShippingDetail} from './shipping-detail';
import {NgForm} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';
import {CartService} from '../cart/cart.service';
import {Router} from '@angular/router';
import {componentCanDeactivate} from '../guards/pending-changes.guard';
@Component({
  selector: 'app-shipping-detail',
  templateUrl: './shipping-detail.component.html',
  styleUrls: ['./shipping-detail.component.css']
})
export class ShippingDetailComponent implements OnInit,componentCanDeactivate {

  constructor(private cartService:CartService,private notifyService:NotificationsService,private routerService:Router) { }
cities=[];
model:ShippingDetail= new ShippingDetail('','',true,-1);
isDirty:boolean=false;
canDeactivate():boolean
{
return !this.isDirty;
}
  ngOnInit() {
    this.cities.push(
      {"id":"1","name":"Ankara"},
      {"id":"2","name":"İstanbul"},
      {"id":"2","name":"London"},
      {"id":"4","name":"Hatay"},
      {"id":"5","name":"Italy"},
    );

  }

  checkout(form:NgForm)
  {
if(form.invalid)
  {
return;
  }
  this.cartService.clear();
  this.notifyService.info("Successfull","Shoppinh Completed!");
  this.routerService.navigate(["products"]);
  }

}
