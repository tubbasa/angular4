import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {HttpModule} from '@angular/http';
import {SimpleNotificationsModule,NotificationsService} from 'angular2-notifications';
import {FormsModule} from '@angular/forms';
import {CartService} from './cart/cart.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import {Routes,RouterModule} from '@angular/router';
import {AccountService} from './account/account.service';
import {LoginGuard} from './account/login.guard';
import {PendingChangesGuard} from './guards/pending-changes.guard';

const appRoutes:Routes=[
  {
    path:"",
    redirectTo:"products",
    pathMatch:"full"
  },
  {
    path:"products",
    component:ProductComponent

  },
  {
    path:"products/:seoUrl",//:seoUrl: parametre
    component:ProductComponent
  },
  {
    path:"my-cart",
    component:CartComponent
  },
  {
    path:"shipping-detail",
    component:ShippingDetailComponent,canActivate:[LoginGuard],canDeactivate:[PendingChangesGuard]
  }
  ,
  {
    path:"account",
    component:AccountComponent
  }
]
@NgModule({
  declarations://bu  modüle dahil etmek istenen componentler yer alır
   [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports://dışarıdan modüller kullanmak istiyorsak buraya yazılır
   [
    BrowserModule,HttpModule,FormsModule,SimpleNotificationsModule.forRoot(),BrowserAnimationsModule,RouterModule.forRoot(appRoutes)
  ],
  exports://dışarıdan bir modül bizim modülümüze ulaşmak istediğinde hangi componentleri ona 
  //sağlayacağımızı yazarız
  [

  ],
  providers://kullanacağımız servisleri yazarız
   [
     {provide:"apiUrl",useValue:"http://northwindapi.azurewebsites.net/api"},
     NotificationsService,
     CartService,AccountService,LoginGuard,PendingChangesGuard
   ],
  bootstrap://bu modğlüğn başlangıç yani ana componentini belirtir ağaç mimarisindedir en üstte 
  //bir component vardır diğerleri onun altındadır. 
   [AppComponent]
})
export class AppModule { }
