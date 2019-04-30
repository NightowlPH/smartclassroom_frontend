import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from '../../environments/environment'; 
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService
{
  redirectUrl: string
  permission: string

  constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
    private baseUrl = environment.backend_uri;

  login(data: Object)
  {    
        return this.http.post(`${this.baseUrl}/login`, data)      
  }

  hasUrlAccess(accessUrl: string): Observable<boolean>{
    let url = `${this.baseUrl}/routeGuard?url=${encodeURIComponent(accessUrl)}`;
    console.log("Checking url access:",url);
    return this.http.get(url,{headers: this.Headers()}).pipe(map(x => {
      return x['access']
    }));
  }

  login_with_token(data)
  {
    return this.http.post(`${this.baseUrl}/login`, data,
    {
      headers: this.Headers()
    })
  }

  logout()
  {        
    var data = {username: this.cookieService.get('username')}
    console.log(data)
    return this.http.post(`${this.baseUrl}/logout`, data,
    {
      headers: this.Headers()
    }).subscribe( () =>
    {
      this.cookieService.deleteAll()
    })
  }

  private Headers()
  {
    if(this.cookieService.get('token'))
    {
      return new HttpHeaders().set('x-access-token', this.cookieService.get('token'))
    }
    else
    {
      console.log("token is missing")
      this.router.navigate(['/login']);
    }
  }  
  
}
