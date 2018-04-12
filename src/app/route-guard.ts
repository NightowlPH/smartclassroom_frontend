import { Injectable }     from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

import { LoginService } from './login/login.service';

@Injectable()
export class AuthGuard implements CanActivate 
{

	constructor( private loginSevice: LoginService, private router: Router, private cookieService: CookieService, private http: HttpClient ){}
  private baseUrl = environment.backend_uri;


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
  {
    let url: string = state.url;

    return this.checkLogin(url);   
  }

  checkLogin(url: string): boolean 
  {
     console.log("pass to route guard")
    if (this.cookieService.get("token"))
    {
      return true
    }
    else
    {
      this.loginSevice.redirectUrl = url
      this.router.navigate(['/login']);
      return false;
    }
  }

}