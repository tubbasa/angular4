import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AccountService} from './account.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
private returnUrl:string;
private message:string;
  constructor(private accountService:AccountService,private router:Router,private  activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(p=>{
      this.returnUrl= p["returnUrl"]||"products";
    });
  }

  loginUser(form:NgForm)
  {
this.accountService.login(form.value.user,form.value.password).subscribe(t=>{
  if(t)
    {
      this.router.navigateByUrl(this.returnUrl);
    }
    else{
      this.message="UserName or password is incorrect!";
    }
})
  }
}
