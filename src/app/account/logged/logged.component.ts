import { Component, OnInit ,DoCheck} from '@angular/core';
import {AccountService} from '../../account/account.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent implements DoCheck {

  isLogged=false;
  constructor(private account:AccountService,private router:Router) { }

  ngDoCheck() {
    this.isLogged=this.account.isLoggedIn();
  }

  logOut()
  {
    this.account.logOut();
    this.router.navigate(["account"]);
  }


}
