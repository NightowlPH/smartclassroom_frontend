import { Injectable }     from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router }    from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'

import { LoginService } from './login/login.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class AuthGuard implements CanActivate 
{

	constructor( private loginService: LoginService, private router: Router, private cookieService: CookieService, private http: HttpClient ){}
  private baseUrl = environment.backend_uri;


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
  {
    if('data' in route && route.data.accessUrl != undefined){
      let redirUrl = state.url;
      let accessUrl: string = route.data.accessUrl
      return this.checkLogin(accessUrl, redirUrl);   
    } 
    else {
      return of(true);
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>
  {
    return this.canActivate(route, state);
  }

  checkLogin(accessUrl: string, redirUrl: string): Observable<boolean> 
  {
    if (this.cookieService.check("token"))
    {
      return this.loginService.hasUrlAccess(accessUrl).pipe(map( response => {
        console.log('access to',accessUrl,':',response);
        return response;
      }));
    }
    else
    {
      this.loginService.redirectUrl = redirUrl;
      this.router.navigate(['/login']);
      return of(false);
    }
  }

}
