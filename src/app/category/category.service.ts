import { Injectable,Inject } from '@angular/core';
import {ProductList} from '../product/product-list.mock';
import {Http,Response} from '@angular/http';
//angular react js bize observable yanşa senkron şeklde serise ulaşmamızı sağlayacak metotları sağlar.
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map'; //gelen datayı istediğimiz değişkene map etmemize yarar.
import 'rxjs/add/operator/do'; //data geldiğinde yapılması istenen işlem anlatılır
import 'rxjs/add/operator/catch'; //hata olduğunda yapılması gereken işlemler yazılır
import {Category} from './category';

@Injectable()
export class CategoryService {

  constructor(private http:Http,@Inject("apiUrl") private apiUrl) 
  {
    
   }
   url:string=this.apiUrl+"/categories";
   getCategories():Observable<Category[]>
   {
     return this.http.get(this.url)
     .map(response=>response.json());
   }
}
