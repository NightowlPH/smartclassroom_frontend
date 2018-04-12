import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from '../../environments/environment'; 


@Injectable()
export class SidebarService
{	

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	GetAccess()
	{
		return this.http.get(`${this.baseUrl}/routeGuard`,
		{
			headers: this.Headers()
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
