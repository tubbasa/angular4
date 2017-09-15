import { Injectable,Inject } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class AccountService {
private loggedIn=false;
  constructor(@Inject('apiUrl') private apiUrl,private http:Http) { }
  login(username,password):Observable<boolean>
  {
  let url:string=this.apiUrl+"/account/login";
  let headers=new Headers();
  headers.append("Authorization",btoa(username+":"+password));
var requestOptions= new RequestOptions({headers:headers});
return this.http.post(url,JSON.stringify({username,password}),requestOptions)
.map(response=>response.json())
.map(res=>
{
  if(res)
    {
      localStorage.setItem("isLogged:",res);
    this.loggedIn=true;
    }
    return res;
});
  }

  logOut()
  {
    localStorage.removeItem('isLogeed');
    this.loggedIn=false;
  }
  
  isLoggedIn()
  {
    return this.loggedIn;
  }
}


