import {Injectable} from '@angular/core';
import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,Router} from '@angular/router';
import {AccountService} from './account.service';


@Injectable()
export class LoginGuard implements CanActivate
{
constructor(private service:AccountService,private router:Router){}
canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot):boolean{
    let logged=this.service.isLoggedIn();
    if(logged)
        {
            return true;
        }
        else{
            this.router.navigate(["account"],{queryParams:{returnUrl:state.url}});
            return false;
        }
}

}
