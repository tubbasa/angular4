import { Injectable,Inject } from '@angular/core';
import {Product} from './product';
import {ProductList} from './product-list.mock';
import {Http,Response} from '@angular/http';
//angular react js bize observable yanşa senkron şeklde serise ulaşmamızı sağlayacak metotları sağlar.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //gelen datayı istediğimiz değişkene map etmemize yarar.
import 'rxjs/add/operator/do'; //data geldiğinde yapılması istenen işlem anlatılır
import 'rxjs/add/operator/catch'; //hata olduğunda yapılması gereken işlemler yazılır

@Injectable()
export class ProductService {

  constructor(private http:Http,@Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl:string):Observable<Product[]> //http servisleriyle çalışıldığı için observable döndürülmesi gerekir
  {
    if(seoUrl)
      {
        return this.http.get(this.apiUrl+"/products/"+seoUrl)
        .map(response=>response.json());
      }
      else{
        return this.http.get(this.apiUrl+"/products")
        .map(response=>response.json());
      }
  
  }

}
