import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Router }    from '@angular/router';
import { environment } from './../../../../environments/environment'; 




@Injectable()
export class UsersService
{
	routeID: string

	constructor ( private http: HttpClient, private cookieService: CookieService, private router: Router ){}
	private baseUrl = environment.backend_uri;

	getAll()
	{		
		return this.http.get(`${this.baseUrl}/users`, 
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
			this.cookieService.deleteAll()
			this.router.navigate(['/login']);
		}
	}	
	
	
}
